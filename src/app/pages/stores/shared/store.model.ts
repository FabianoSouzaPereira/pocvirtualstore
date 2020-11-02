import { BaseResourceModel } from "../../../shared/models/base-resource.model";
import { Product } from '../../products/shared/product.model';

export class Store extends BaseResourceModel {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
    public productId?: number,
    public product?: Product
  ) {
    super();
  }

  static fromJson(jsonData: any): Store {
    return Object.assign(new Store(), jsonData);
  }
}
