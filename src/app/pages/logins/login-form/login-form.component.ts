import { Component, OnInit } from '@angular/core';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form.component';
import { Login } from '../shared/login.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: [ './login-form.component.css' ]
})
export class LoginFormComponent extends BaseResourceFormComponent<Login> implements OnInit {
  protected buildResourceForm(): void {
    throw new Error('Method not implemented.');
  }

  pageTitle: string;

  constructor() {
    super();
    this.pageTitle = 'Login'
  }

  ngOnInit(): void {
  }

}
