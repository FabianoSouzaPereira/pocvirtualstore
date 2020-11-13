import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrderFormComponent } from './order-form/order-form.component';
import { OrderListComponent } from './order-list/order-list.component';


@NgModule({
  declarations: [ OrderFormComponent, OrderListComponent ],
  imports: [
    SharedModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
