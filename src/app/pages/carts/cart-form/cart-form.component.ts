import { Component, OnInit } from '@angular/core';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form.component';
import { Cart } from '../shared/cart.model';
import { CartService } from '../shared/cart.service';

@Component({
  selector: 'app-cart-form',
  templateUrl: './cart-form.component.html',
  styleUrls: [ './cart-form.component.css' ]
})
export class CartFormComponent extends BaseResourceFormComponent<Cart> implements OnInit {
  protected buildResourceForm(): void {

  }

  constructor() {
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

}
