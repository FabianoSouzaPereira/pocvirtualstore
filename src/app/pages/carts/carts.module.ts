import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { CartsRoutingModule } from './carts-routing.module';
import { CartFormComponent } from './cart-form/cart-form.component';
import { CartListComponent } from './cart-list/cart-list.component';


@NgModule({
  declarations: [ CartFormComponent, CartListComponent ],
  imports: [
    SharedModule,
    CartsRoutingModule
  ]
})
export class CartsModule { }
