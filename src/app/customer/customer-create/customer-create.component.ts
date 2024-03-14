import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

interface Tipo {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrl: './customer-create.component.css'
})


export class CustomerCreateComponent implements OnInit {

  formularioAsignar!: FormGroup;

  constructor(public formulario: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public getData: any,
    private _snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<CustomerCreateComponent>) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formularioAsignar = this.formulario.group({
      id_video: [],
      id_inspector: ['', Validators.required],
      estado: ['P'],
      comentario: ['']
    });
  }

  tipos: Tipo[] = [
    { value: 'natural', viewValue: 'Natural' },
    { value: 'juridica', viewValue: 'Juridica' },
  ]



}
