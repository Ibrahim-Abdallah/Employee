import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentComponent } from './components/department/department.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DepartmentComponent
  ],
  imports: [
    CommonModule,
    DepartmentRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class DepartmentModule { }
