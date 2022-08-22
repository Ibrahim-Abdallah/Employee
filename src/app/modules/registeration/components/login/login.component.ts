import { Route, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterationService } from '../../services/registeration.service';
import { Auth } from '../../models/auth.model';
import { Login } from '../../models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: Login = new Login();
  invalidLogin!: boolean;
  clientDetail !: FormGroup;

  constructor(private registerationService: RegisterationService, private router: Router, private formBuilder: FormBuilder) { }
 
  
  ngOnInit(): void {
    this.initialForm();
  }

  initialForm() {
    this.clientDetail = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  onSignIn() {
    this.login.email = this.clientDetail.value.email;
    this.login.password = this.clientDetail.value.password;
    console.log(this.login);
    this.registerationService.Login(this.login).subscribe((res: any) => {
      console.log(res);
      const token = res.token;
      this.invalidLogin = res === 0;
      if(!this.invalidLogin) {
        localStorage.setItem('token', token);
        this.router.navigate(['/home']);
      }
    }, (err: any) => {
      console.log(err);
    });
  }

  onSignOut() {
    localStorage.clear();
  }

}
