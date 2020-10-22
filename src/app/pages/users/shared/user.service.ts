import { User } from './user.model';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';

export class UserService extends BaseResourceService<User> {

  constructor() {
    super();
  }

}
