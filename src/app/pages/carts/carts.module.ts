import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { CartsRoutingModule } from './carts-routing.module';
import { CartFormComponent } from './cart-form/cart-form.component';


@NgModule({
  declarations: [ CartFormComponent ],
  imports: [
    SharedModule,
    CartsRoutingModule
  ]
})
export class CartsModule { }
