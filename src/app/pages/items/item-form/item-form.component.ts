import { Component, OnInit } from '@angular/core';
import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.component';
import { Item } from '../shared/Item.model';
import { ItemService } from '../shared/Item.service';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: [ './item-form.component.css' ]
})
export class ItemFormComponent extends BaseResourceListComponent<Item> {

  constructor(private itemService: ItemService) {
    super(itemService);
  }

}
