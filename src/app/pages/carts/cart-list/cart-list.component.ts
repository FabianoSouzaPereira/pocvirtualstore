import { Component } from '@angular/core';
import { BaseResourceListComponent } from '../../../shared/components/base-resource-list/base-resource-list.component';

import { Cart } from '../shared/cart.model';
import { CartService } from '../shared/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: [ './cart-list.component.css' ]
})
export class CartListComponent extends BaseResourceListComponent<Cart>{

  constructor(private cartService: CartService) {
    super(cartService);
  }

}
