import { BaseResourceModel } from "../../../shared/models/base-resource.model";

export class Store extends BaseResourceModel {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string) {
    super();
  }

  static fromJson(jsonData: any): Store {
    return Object.assign(new Store(), jsonData);
  }
}
