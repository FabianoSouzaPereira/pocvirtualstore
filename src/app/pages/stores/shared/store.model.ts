import { constructor } from "moment";
import { BaseResourceModel } from "src/app/shared/models/base-resource.model";
import { Item } from '../../items/shared/Item.model';

export class Store extends BaseResourceModel {
  constructor(public id?: number,
    public items?: Item[]
  ) {
    super();
  }

  static fromJson(jsonData: any): Store {
    return Object.assign(new Store(), jsonData);
  }
}
