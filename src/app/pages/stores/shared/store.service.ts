import { Injectable, Injector } from '@angular/core';
import { Store } from './store.model';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';

@Injectable({
  providedIn: 'root'
})
export class StoreService extends BaseResourceService<Store> {

  constructor(protected injector: Injector) {
    super("", injector, Store.fromJson);
  }

}
