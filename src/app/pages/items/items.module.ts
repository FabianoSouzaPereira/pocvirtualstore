import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemFormComponent } from './item-form/item-form.component';


@NgModule({
  declarations: [ ItemListComponent, ItemFormComponent ],
  imports: [
    SharedModule,
    ItemsRoutingModule
  ]
})
export class ItemsModule { }
