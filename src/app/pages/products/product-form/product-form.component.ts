import { Component, Injector, OnInit } from '@angular/core';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';
import { Product } from '../shared/product.model';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: [ './product-form.component.css' ]
})
export class ProductFormComponent extends BaseResourceFormComponent<Product> {


  constructor(protected productsSevice: ProductService, protected injector: Injector) {
    super(injector, new Product(), productsSevice, Product.fromJson);
  }

  protected buildResourceForm(): void {
    this.resourceForm = this.formBuilder.group({
      id: [ null ],
      name: [ null ],
      description: [ null ],
      type: [ null ],
      qty: [ null ],
      price: [ null ],
      date: [ null ],
      categoryId: [ null ],
      category: [ null ],
      picture: [ null ],
    });
  }

}
