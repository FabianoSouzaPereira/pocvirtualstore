import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { LoginsRoutingModule } from './logins-routing.module';
import { LoginFormComponent } from './login-form/login-form.component';


@NgModule({
  declarations: [ LoginFormComponent ],
  imports: [
    SharedModule,
    LoginsRoutingModule
  ]
})
export class LoginsModule { }
