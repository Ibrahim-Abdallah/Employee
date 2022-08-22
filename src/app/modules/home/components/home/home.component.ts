import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/modules/employee/models/employee.model';
import { EmployeeService } from 'src/app/modules/employee/services/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  employeeList: Employee[] = [];

  constructor(private service: EmployeeService) { }

  ngOnInit(): void {
    this.getAllEmpolyees();
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

}
