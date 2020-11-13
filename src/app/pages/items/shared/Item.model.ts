import { constructor } from "moment";
import { BaseResourceModel } from "src/app/shared/models/base-resource.model";
import { Product } from '../../products/shared/product.model';
import { Order } from '../../orders/shared/order.model';


export class Item extends BaseResourceModel {
  constructor(
    public id?: number,
    public orderId?: number,
    public order?: Order,
    public productId?: number,
    public product?: Product,
    public number?: number,
    public qty?: number,
  ) {
    super();
  }

  static fromJson(jsonData: any): Item {
    return Object.assign(new Item(), jsonData);
  }
}
