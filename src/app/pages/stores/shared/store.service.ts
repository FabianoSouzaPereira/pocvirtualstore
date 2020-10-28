import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';

import { Store } from './store.model';
@Injectable({
  providedIn: 'root'
})
export class StoreService extends BaseResourceService<Store> {

  constructor(protected injector: Injector) {
    super("api/stores", injector, Store.fromJson);
  }

}
