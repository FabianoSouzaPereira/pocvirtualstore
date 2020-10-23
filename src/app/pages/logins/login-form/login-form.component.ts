import { Component, OnInit, Injector } from '@angular/core';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form.component';
import { Login } from '../shared/login.model';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: [ './login-form.component.css' ]
})

export class LoginFormComponent extends BaseResourceFormComponent<Login>{


  pageTitle: string;

  constructor(protected loginService: LoginService, protected injector: Injector) {
    super(injector, loginService, Login.fromJson);
    this.pageTitle = 'Login'
  }

  protected buildResourceForm(): void {
    throw new Error('Method not implemented.');
  }

}
