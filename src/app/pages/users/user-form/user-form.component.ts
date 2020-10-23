import { Component, OnInit, Injector } from '@angular/core';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form.component';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: [ './user-form.component.css' ]
})
export class UserFormComponent extends BaseResourceFormComponent<User> {


  constructor(protected userService: UserService, protected injector: Injector) {
    super(injector, userService);
  }

  protected buildResourceForm(): void {
    throw new Error('Method not implemented.');
  }

}
