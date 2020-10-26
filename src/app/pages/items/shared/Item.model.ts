import { constructor } from "moment";
import { BaseResourceModel } from "src/app/shared/models/base-resource.model";

export class Item extends BaseResourceModel {
  constructor(
    public id?: number,
    public email?: string,
    public password?: string,
  ) {
    super();
  }

  static fromJson(jsonData: any): Item {
    return Object.assign(new Item(), jsonData);
  }
}
