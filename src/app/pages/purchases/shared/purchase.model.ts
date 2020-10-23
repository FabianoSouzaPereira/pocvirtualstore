import { constructor } from "moment";
import { BaseResourceModel } from "src/app/shared/models/base-resource.model";

export class Purchase extends BaseResourceModel {
  constructor() {
    super();
  }

  static fromJson(jsonData: any): Purchase {
    return Object.assign(new Purchase(), jsonData);
  }
}
