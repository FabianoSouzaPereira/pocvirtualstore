import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { Cart } from './cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService extends BaseResourceService<Cart> {

  constructor(protected injector: Injector) {
    super("", injector, Cart.fromJson);
  }

}
