import { Component, Injector, OnInit } from '@angular/core';
import { BaseResourceFormComponent } from '../../../shared/components/base-resource-form.component';
import { Purchase } from '../shared/purchase.model';
import { PurchaseService } from '../shared/purchase.service';

@Component({
  selector: 'app-purchase-form',
  templateUrl: './purchase-form.component.html',
  styleUrls: [ './purchase-form.component.css' ]
})
export class PurchaseFormComponent extends BaseResourceFormComponent<Purchase> {

  constructor(protected purchaseService: PurchaseService, protected injector: Injector) {
    super(injector, purchaseService, Purchase.fromJson);
  }

  protected buildResourceForm(): void {
    throw new Error('Method not implemented.');
  }

}
