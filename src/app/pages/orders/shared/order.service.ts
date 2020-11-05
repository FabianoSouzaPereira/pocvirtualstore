import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from '../../../shared/services/base-resource.service';

import { Order } from './order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService extends BaseResourceService<Order> {

  constructor(protected injector: Injector) {
    super("api/orders", injector, Order.fromJson);
  }

}
