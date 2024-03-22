import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractCreateComponent } from './contract-create/contract-create.component';
import { ContractEditComponent } from './contract-edit/contract-edit.component';
import { ContractListComponent } from './contract-list/contract-list.component';
import { ContractRoutingModule } from './contract-routing.module';



@NgModule({
  declarations: [
    ContractCreateComponent,
    ContractEditComponent,
    ContractListComponent
  ],
  imports: [
    CommonModule,
    ContractRoutingModule
  ]
})
export class ContractModule { }
