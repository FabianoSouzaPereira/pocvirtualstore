import { Component, Injector, OnInit } from '@angular/core';
import { BaseResourceFormComponent } from '../../../shared/components/base-resource-form.component';
import { Order } from '../shared/order.model';
import { OrderService } from '../shared/order.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: [ './order-form.component.css' ]
})
export class OrderFormComponent extends BaseResourceFormComponent<Order> {

  constructor(protected orderService: OrderService, protected injector: Injector) {
    super(injector, orderService);
  }

  protected buildResourceForm(): void {
    throw new Error('Method not implemented.');
  }


}
