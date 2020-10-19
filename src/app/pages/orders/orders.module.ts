import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrderFormComponent } from './order-form/order-form.component';


@NgModule({
  declarations: [ OrderFormComponent ],
  imports: [
    SharedModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
