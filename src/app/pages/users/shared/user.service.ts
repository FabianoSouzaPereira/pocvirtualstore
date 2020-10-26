import { Injectable, Injector } from '@angular/core';
import { User } from './user.model';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseResourceService<User> {

  constructor(protected injector: Injector) {
    super("api/users", injector, User.fromJson);
  }

}
