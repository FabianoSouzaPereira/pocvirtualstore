import { constructor } from "moment";
import { BaseResourceModel } from "src/app/shared/models/base-resource.model";

export class Product extends BaseResourceModel {

  constructor() {
    super();
  }

  static fromJson(jsonData: any): Product {
    return Object.assign(new Product(), jsonData);
  }
}
