import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoryComponent } from './category/category.component';


@NgModule({
  declarations: [ CategoryComponent ],
  imports: [
    SharedModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }
