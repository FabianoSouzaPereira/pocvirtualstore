import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { Order } from '../../orders/shared/order.model';
import { OrderService } from '../../orders/shared/order.service';

import { Store } from './store.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService extends BaseResourceService<Store> {

  constructor(protected injector: Injector, private orderService: OrderService) {
    super("api/stores", injector, Store.fromJson);
  }



}
