import { BaseResourceModel } from "../../..//shared/models/base-resource.model";

export class Cart extends BaseResourceModel {
  constructor(
    public id?: number
  ) {
    super();
  }

  static fromJson(jsonData: any): Cart {
    return Object.assign(new Cart(), jsonData);
  }

}
