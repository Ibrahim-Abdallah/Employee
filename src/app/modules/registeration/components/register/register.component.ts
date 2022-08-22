import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterationService } from '../../services/registeration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private registerationService: RegisterationService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  
  }

}
