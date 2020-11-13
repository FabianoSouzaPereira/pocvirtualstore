import { Component, Injector, OnInit } from '@angular/core';
import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.component';
import { Item } from '../shared/Item.model';
import { ItemService } from '../shared/Item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: [ './item-list.component.css' ]
})
export class ItemListComponent extends BaseResourceListComponent<Item>{

  constructor(private itemService: ItemService) {
    super(itemService);
  }

}
