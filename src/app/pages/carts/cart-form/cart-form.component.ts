import { Component, OnInit, Injector } from '@angular/core';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';
import { Cart } from '../shared/cart.model';
import { CartService } from '../shared/cart.service';

@Component({
  selector: 'app-cart-form',
  templateUrl: './cart-form.component.html',
  styleUrls: [ './cart-form.component.css' ]
})
export class CartFormComponent extends BaseResourceFormComponent<Cart> {


  constructor(protected cartService: CartService, protected injector: Injector) {
<<<<<<< HEAD
    super(injector, new Cart, cartService, Cart.fromJson);
=======
    super(injector, new Cart(), cartService, Cart.fromJson);
>>>>>>> pages_templates
  }

  protected buildResourceForm(): void {
    throw new Error('Method not implemented.');
  }

}
