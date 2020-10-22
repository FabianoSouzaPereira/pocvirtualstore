import { Purchase } from './purchase.model';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';

export class PurchaseService extends BaseResourceService<Purchase> {

  constructor() {
    super();
  }

}

