import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { Cart } from './cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService extends BaseResourceService<Cart> {

  constructor(private cartService: CartService) {
    super(Cart.fromJson);
  }

}
