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

  login!: Login;
  invalidLogin!: boolean;

  constructor(private registerationService: RegisterationService, private router: Router) { }
 
  
  ngOnInit(): void {
  }

  onSignIn() {
    this.registerationService.Login(this.login).subscribe((res: any) => {
      console.log(res);
      this.invalidLogin = res === 0;
      if(!this.invalidLogin) {
        this.router.navigate(['/home']);
      }
    }, (err: any) => {
      console.log(err);
    });
  }

}
