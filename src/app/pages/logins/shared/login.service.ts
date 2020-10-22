import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { Login } from './login.model';

export class LoginService extends BaseResourceService<Login> {

  constructor(private loginService: LoginService) {
    super();
  }

}
