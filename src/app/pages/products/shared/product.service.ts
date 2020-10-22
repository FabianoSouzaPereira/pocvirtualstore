import { Product } from './product.model';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';

export class ProductService extends BaseResourceService<Product> {

  constructor() {
    super();
  }

}
