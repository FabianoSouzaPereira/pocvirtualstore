import { Injectable, Injector } from '@angular/core';
import { Order } from './order.model';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';


@Injectable({
  providedIn: 'root'
})
export class OrderService extends BaseResourceService<Order> {

  constructor(protected injector: Injector) {
    super("api/orders", injector, Order.fromJson);
  }

}
