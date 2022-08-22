import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

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
    return this.http.get(this.baseUrl + 'Departments/get-alldepartments')
  }

  createDepartment(department: any): any {
    return this.http.post(this.baseUrl + 'Departments/create-department', department).pipe();
  }

  updateDepartment(department: any): any {
    return this.http.put(this.baseUrl + 'Departments/update-department', department).pipe();
  }

  deleteDepartment(department: any): any {
    return this.http.delete(this.baseUrl + 'Departments/delete-department/' + department.id).pipe();
  }

}
