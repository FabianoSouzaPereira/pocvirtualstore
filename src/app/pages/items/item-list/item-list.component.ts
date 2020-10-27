import { Component, Injector, OnInit } from '@angular/core';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';
import { Item } from '../shared/Item.model';
import { ItemService } from '../shared/Item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: [ './item-list.component.css' ]
})
export class ItemListComponent extends BaseResourceFormComponent<Item>{

  constructor(private itemService: ItemService, protected injector: Injector) {
    super(injector, new Item(), itemService, Item.fromJson);
  }

  protected buildResourceForm(): void {
    throw new Error('Method not implemented.');
  }
}
