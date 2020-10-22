import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { Order } from './order.model';

export class OrderService extends BaseResourceService<Order> {

  constructor() {
    super();
  }

}
