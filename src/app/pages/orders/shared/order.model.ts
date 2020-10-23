import { constructor } from "moment";
import { BaseResourceModel } from "src/app/shared/models/base-resource.model";

export class Order extends BaseResourceModel {
  constructor() {
    super();
  }

  static fromJson(jsonData: any): Order {
    return Object.assign(new Order(), jsonData);
  }
}
