import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: [ './login-form.component.css' ]
})
export class LoginFormComponent extends BaseResourceFormComponent<Login> implements OnInit {

  pageTitle: string;

  constructor() {
    this.pageTitle = 'Login'
  }

  ngOnInit(): void {
  }

}
