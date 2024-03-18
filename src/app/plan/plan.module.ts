import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanListComponent } from './plan-list/plan-list.component';
import { PlanEditComponent } from './plan-edit/plan-edit.component';
import { PlanCreateComponent } from './plan-create/plan-create.component';
import { PlanRoutingModule } from './plan-routing.module';



@NgModule({
  declarations: [
    PlanListComponent,
    PlanEditComponent,
    PlanCreateComponent,
  ],
  imports: [
    CommonModule,
    PlanRoutingModule
  ]
})
export class PlanModule { }
