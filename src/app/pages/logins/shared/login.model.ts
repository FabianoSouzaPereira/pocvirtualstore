import { constructor } from "moment";
import { BaseResourceModel } from "src/app/shared/models/base-resource.model";

export class Login extends BaseResourceModel {
  constructor(
    public id?: number,
    public email?: string,
    public password?: string,
  ) {
    super();
  }
}
