import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { Cart } from './cart.model';

export class CartService extends BaseResourceService<Cart> {

  constructor() {
    super();
  }

}
