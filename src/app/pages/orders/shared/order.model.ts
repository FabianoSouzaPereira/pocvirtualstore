import { constructor } from "moment";
import { BaseResourceModel } from "src/app/shared/models/base-resource.model";
import { Item } from '../../items/shared/Item.model';
import { User } from '../../users/shared/user.model';

export class Order extends BaseResourceModel {
  constructor(
    public id?: number,
    public number?: number,
    public userId?: number,
    public user?: User,
    public date?: string,
    public paid?: boolean,
  ) {
    super();
  }

  static fromJson(jsonData: any): Order {
    return Object.assign(new Order(), jsonData);
  }

  get paidText(): string {
    return this.paid ? 'Pago' : 'Pedente';
  }
}
