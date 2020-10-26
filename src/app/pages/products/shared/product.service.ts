import { Injectable, Injector } from '@angular/core';
import { Product } from './product.model';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseResourceService<Product> {

  constructor(protected injector: Injector) {
    super("api/products", injector, Product.fromJson);
  }

}
