import { constructor } from "moment";
import { BaseResourceModel } from "src/app/shared/models/base-resource.model";
import { Category } from '../../categories/shared/category.model';

export class Product extends BaseResourceModel {

  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
    public type?: string,
    public qty?: number,
    public price?: number,
    public date?: string,
    public categoryId?: number,
    public category?: Category,
    public picture?: String,
  ) {
    super();
  }

  static types = {
    Full: 'Completo',
    Part: 'Parte'
  };

  static fromJson(jsonData: any): Product {
    return Object.assign(new Product(), jsonData);
  }

}
