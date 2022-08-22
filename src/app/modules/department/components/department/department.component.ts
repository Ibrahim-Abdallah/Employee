import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Department } from '../../models/department.model';
import { DepartmentService } from '../../services/department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {

  departmentList: Department[] = [];
  departmentObj: Department = new Department;

  departmentDetail !: FormGroup;

  isAdmin = false;

  constructor(private service: DepartmentService, private formBuilder: FormBuilder) {
    // this.checkAdmin();
  }
  ngOnInit(): void {
    this.initialForm();
    this.getAllDepartment();
  }

  initialForm() {
    this.departmentDetail = this.formBuilder.group({
      id: [0],
      name: ['']
    });
  }

  checkAdmin() {
    this.service.isAdmin().subscribe((res: any) => {
      console.log(res);
      this.isAdmin = res;
    },
      (err: any) => {
        console.log(err);
      });
  }

  getAllDepartment() {
    this.service.getAll().subscribe((res: any) => {
      console.log(res);
      this.departmentList = res;
    },
      (err: any) => {
        console.log(err);
      });
  }

  addDepartment() {
    this.departmentObj.id = this.departmentDetail.value.id;
    this.departmentObj.name = this.departmentDetail.value.name;

    this.service.createDepartment(this.departmentObj).subscribe((res: any) => {
      console.log(res);
      this.getAllDepartment();
      this.initialForm();
    }, (err: any) => {
      console.log(err);
    });
  }

  editDepartment(department: Department) {
    this.departmentDetail.controls['id'].setValue(department.id);
    this.departmentDetail.controls['name'].setValue(department.name);
  }

  updateDepartment() {
    this.departmentObj.id = this.departmentDetail.value.id;
    this.departmentObj.name = this.departmentDetail.value.name;

    this.service.updateDepartment(this.departmentObj).subscribe((res: any) => {
      console.log(res);
      this.getAllDepartment();
    }, (err: any) => {
      console.log(err);
    });
  }

  deleteDepartment(department: Department) {
    this.service.deleteDepartment(department).subscribe((res: any) => {
      console.log(res);
      alert('Department deleted success !');
      this.getAllDepartment();
    }, (err: any) => {
      console.log(err);
    });
  }
}
