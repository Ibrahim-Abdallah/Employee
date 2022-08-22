import { DepartmentService } from './../../../department/services/department.service';
import { Employee } from './../../models/employee.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Department } from 'src/app/modules/department/models/department.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employeeDetail !: FormGroup;
  employeeList: Employee[] = [];
  employeeObj: Employee = new Employee;
  departmentList: Department[] = [];

  constructor(private service: EmployeeService, private departmentService: DepartmentService, private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.getAllEmpolyees();
    this.getDepartmentDropdown();
    this.initialForm();
  }

  initialForm() {
    this.employeeDetail = this.formBuilder.group({
      id: 0,
      name: [''],
      departmentId: '',
      salary: '',
      isActive: false
    });
  }

  getAllEmpolyees() {
    this.service.getAll().subscribe((res: any) => {
      console.log(res);
      this.employeeList = res;
    },
      (err: any) => {
        console.log(err);
      });
  }

  getDepartmentDropdown() {
    this.departmentService.getAll().subscribe((res: any) => {
      console.log(res);
      this.departmentList = res;
    }, (err: any) => {
      console.log(err);
    });
  }

  addEmployee() {
    this.employeeObj.id = this.employeeDetail.value.id;
    this.employeeObj.name = this.employeeDetail.value.name;
    this.employeeObj.departmentId = this.employeeDetail.value.departmentId;
    this.employeeObj.salary = this.employeeDetail.value.salary;
    this.employeeObj.isActive = this.employeeDetail.value.isActive;
    console.log(this.employeeDetail.value);
    console.log(this.employeeObj);
    this.service.createEmployee(this.employeeObj).subscribe((res: any) => {
      console.log(res);
      this.getAllEmpolyees();
      this.initialForm();
    }, (err: any) => {
      console.log(err);
    });
  }

  editEmployee(employee: Employee) {
    this.employeeDetail.controls['id'].setValue(employee.id);
    this.employeeDetail.controls['name'].setValue(employee.name);
    this.employeeDetail.controls['departmentId'].setValue(employee.departmentId);
    this.employeeDetail.controls['salary'].setValue(employee.salary);
    this.employeeDetail.controls['isActive'].setValue(employee.isActive);
  }

  updateEmployee() {
    this.employeeObj.id = this.employeeDetail.value.id;
    this.employeeObj.name = this.employeeDetail.value.name;
    this.employeeObj.departmentId = this.employeeDetail.value.departmentId;
    this.employeeObj.salary = this.employeeDetail.value.salary;
    this.employeeObj.isActive = this.employeeDetail.value.isActive;

    this.service.updateEmployee(this.employeeObj).subscribe((res: any) => {
      console.log(res);
      this.getAllEmpolyees();
    }, (err: any) => {
      console.log(err);
    });
  }

  deleteEmployee(employee: Employee) {
    this.service.deleteEmployee(employee).subscribe((res: any) => {
      console.log(res);
      alert('Employee deleted success !');
      this.getAllEmpolyees();
    }, (err: any) => {
      console.log(err);
    });
  }

}
