import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl = environment.API_URL;
  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  isAdmin(): any {
    return this.http.get(this.baseUrl + 'Auth/is-admin');
  }

  getAll(): any {
    return this.http.get(this.baseUrl + 'Employees/get-allemployees')
  }

  createEmployee(employee: any): any {
    return this.http.post(this.baseUrl + 'Employees/create-employee', employee).pipe();
  }

  updateEmployee(employee: any): any {
    return this.http.put(this.baseUrl + 'Employees/update-employee', employee).pipe();
  }

  deleteEmployee(employee: any): any {
    return this.http.delete(this.baseUrl + 'Employees/delete-employee/' + employee.id).pipe();
  }
}
