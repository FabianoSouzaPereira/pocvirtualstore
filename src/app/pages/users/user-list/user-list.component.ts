import { Component } from '@angular/core';
import { BaseResourceListComponent } from '../../../shared/components/base-resource-list/base-resource-list.component';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: [ './user-list.component.css' ]
})
export class UserListComponent extends BaseResourceListComponent<User> {

  constructor(private userService: UserService) {
    super(userService);
  }

}
