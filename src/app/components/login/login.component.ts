import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

import { Router } from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userLogin = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  })
  constructor(private router: Router) { }
  usersLogin() {
    this.router.navigate(['users']);

  }

}
