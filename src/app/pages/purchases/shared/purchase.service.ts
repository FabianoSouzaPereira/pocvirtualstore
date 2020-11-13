import { Injectable, Injector } from '@angular/core';
import { Purchase } from './purchase.model';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService extends BaseResourceService<Purchase> {

  constructor(protected injector: Injector) {
    super("purchases", injector, Purchase.fromJson);
  }

}

