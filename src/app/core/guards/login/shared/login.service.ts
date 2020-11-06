import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { Login } from './login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseResourceService<Login> {

  constructor(protected injector: Injector) {
    super("api/users", injector, Login.fromJson);
  }

  login(user: any) {
    return new Promise((resolve) => {
      window.localStorage.setItem('token', 'meu-token');
      resolve(true);
    });
  }

  createAccount(account: any) {
    return new Promise((resolve) => {
      resolve(true);
    });
  }


}
