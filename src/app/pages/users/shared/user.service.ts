import { Injectable, Injector } from '@angular/core';
import { User } from './user.model';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseResourceService<User> {

  constructor(protected injector: Injector) {
    super("users", injector, User.fromJson);
  }

}
