import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { StoresRoutingModule } from './stores-routing.module';
import { StoreFormComponent } from './store-form/store-form.component';


@NgModule({
  declarations: [ StoreFormComponent ],
  imports: [
    SharedModule,
    StoresRoutingModule
  ]
})
export class StoresModule { }
