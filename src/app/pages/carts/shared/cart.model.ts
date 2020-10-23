import { constructor } from "moment";
import { BaseResourceModel } from "src/app/shared/models/base-resource.model";

export class Cart extends BaseResourceModel {
  constructor() {
    super();
  }

  static fromJson(jsonData: any): Cart {
    return Object.assign(new Cart(), jsonData);
  }

}
