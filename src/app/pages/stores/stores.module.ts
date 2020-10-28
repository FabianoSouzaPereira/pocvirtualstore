import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { StoresRoutingModule } from './stores-routing.module';
import { StoreFormComponent } from './store-form/store-form.component';
import { StoreListComponent } from './store-list/store-list.component';


@NgModule({
  declarations: [ StoreFormComponent, StoreListComponent ],
  imports: [
    SharedModule,
    StoresRoutingModule
  ]
})
export class StoresModule { }
