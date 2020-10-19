import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { PurchasesRoutingModule } from './purchases-routing.module';
import { PurchaseComponent } from './purchase/purchase.component';


@NgModule({
  declarations: [ PurchaseComponent ],
  imports: [
    SharedModule,
    PurchasesRoutingModule
  ]
})
export class PurchasesModule { }
