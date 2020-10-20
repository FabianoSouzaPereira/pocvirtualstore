import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { UsersRoutingModule } from './users-routing.module';
import { UserFormComponent } from './user-form/user-form.component';


@NgModule({
  declarations: [ UserFormComponent ],
  imports: [
    SharedModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
