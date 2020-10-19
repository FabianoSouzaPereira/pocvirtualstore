import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductFormComponent } from './product-form/product-form.component';


@NgModule({
  declarations: [ ProductFormComponent ],
  imports: [
    SharedModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
