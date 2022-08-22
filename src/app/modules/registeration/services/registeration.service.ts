import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterationService {

  baseUrl = environment.API_URL;
  constructor(private http: HttpClient) { }

  Login(loginModel: any): any {
    return this.http.post(this.baseUrl + 'Auth/token', loginModel);
  }

  Register(registerModel: any): any {
    return this.http.post(this.baseUrl + 'Auth/register', registerModel);
  }

  RegisterAdmin(registerModel: any): any {
    return this.http.post(this.baseUrl + 'Auth/register-admin', registerModel);
  }

}
