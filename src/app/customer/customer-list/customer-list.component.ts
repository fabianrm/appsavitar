import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { CustomerService } from '../customer.service';
import { CCustomer } from '../Models/CCustomer';
import { Subscription } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CustomerCreateComponent } from '../customer-create/customer-create.component';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent implements OnInit, OnDestroy {

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  displayedColumns: string[] = ['id', 'type', 'document_number', 'name', 'address', 'phone_number', 'email', 'status', 'acciones'];
  public dataSource!: MatTableDataSource<CCustomer[]>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  subscription!: Subscription


  constructor(private customerService: CustomerService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getCustomers();
    this.subscription = this.customerService.refresh$.subscribe(() => {
      this.getCustomers()
    });

  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getCustomers() {
    this.customerService.getCustomers().subscribe((respuesta) => {

      if (respuesta.data.length > 0) {
        this.dataSource = new MatTableDataSource(respuesta.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
      //  console.log(respuesta)
    });
  }

  openDialog(row: any) {
    //  this.getSeleccionados();
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '40%';
    //dialogConfig.data = row;
    // dialogConfig.data = [row, this.ids, this.filasSel];

    this.dialog.open(CustomerCreateComponent, dialogConfig);

    this.dialog.afterAllClosed.subscribe(() => {
      // this.ids = [];
      //this.ids.length = 0;
      //  this.selection.clear()
    })
  }


}
