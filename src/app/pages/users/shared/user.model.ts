import { BaseResourceModel } from 'src/app/shared/models/base-resource.model';

export class User extends BaseResourceModel {
  constructor(
    public id?: number,
    public email?: string,
    public password?: string,
    public address?: string,
    public address2?: string,
    public city?: string,
    public state?: string,
    public zipcode?: string
  ) {
    super();
  }

  static fromJson(jsonData: any): User {
    return Object.assign(new User(), jsonData);
  }
}
