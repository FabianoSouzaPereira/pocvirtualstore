import { BaseResourceModel } from "../../../shared/models/base-resource.model";
import { Order } from '../../orders/shared/order.model';

export class Cart extends BaseResourceModel {
  constructor(
    public id?: number,
    public name?: string,
    public orderId?: number,
    public order?: Order
  ) {
    super();
  }

  static fromJson(jsonData: any): Cart {
    return Object.assign(new Cart(), jsonData);
  }

}
