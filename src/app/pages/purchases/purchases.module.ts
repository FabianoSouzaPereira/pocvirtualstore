import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { PurchasesRoutingModule } from './purchases-routing.module';
import { PurchaseFormComponent } from './purchase-form/purchase-form.component';


@NgModule({
  declarations: [ PurchaseFormComponent ],
  imports: [
    SharedModule,
    PurchasesRoutingModule
  ]
})
export class PurchasesModule { }
