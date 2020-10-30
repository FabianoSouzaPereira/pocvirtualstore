import { Component, OnInit, Injector } from '@angular/core';
import { Validators } from '@angular/forms';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';
import { Login } from './shared/login.model';
import { LoginService } from './shared/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: [ './login-form.component.css' ]
})

export class LoginFormComponent extends BaseResourceFormComponent<Login>{

  login = {
    email: '',
    password: ''
  };
  pageTitle: string;

  constructor(protected loginService: LoginService, protected injector: Injector) {
    super(injector, new Login(), loginService, Login.fromJson);
    this.pageTitle = 'Login'
  }

  protected buildResourceForm(): void {
    this.resourceForm = this.formBuilder.group({
      id: [ null ],
      email: [ null, [ Validators.required, Validators.minLength(10) ] ],
      password: [ null, [ Validators.required, Validators.minLength(6) ] ]
    });
  }

  async onSubmit() {
    try {
      const result = await this.loginService.login(this.login);
      console.log(`Login efetuado: ${ result }`);

      // navego para a rota vazia novamente
      this.router.navigate([ '' ]);
    } catch (error) {
      console.error(error);
    }
  }

}
