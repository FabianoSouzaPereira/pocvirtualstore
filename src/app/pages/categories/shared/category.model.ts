import { constructor } from "moment";
import { BaseResourceModel } from "src/app/shared/models/base-resource.model";

export class Category extends BaseResourceModel {
  constructor() {
    super();
  }

  static fromJson(jsonData: any): Category {
    return Object.assign(new Category(), jsonData);
  }
}
