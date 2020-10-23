import { constructor } from "moment";
import { BaseResourceModel } from "src/app/shared/models/base-resource.model";

export class Store extends BaseResourceModel {
  constructor() {
    super();
  }

  static fromJson(jsonData: any): Store {
    return Object.assign(new Store(), jsonData);
  }
}
