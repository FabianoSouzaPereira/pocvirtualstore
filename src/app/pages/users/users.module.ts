import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { UsersRoutingModule } from './users-routing.module';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [ UserComponent ],
  imports: [
    SharedModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
