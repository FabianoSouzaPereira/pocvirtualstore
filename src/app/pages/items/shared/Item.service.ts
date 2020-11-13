import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { Item } from './Item.model';


@Injectable({
  providedIn: 'root'
})
export class ItemService extends BaseResourceService<Item> {

  constructor(protected injector: Injector) {
    super("items", injector, Item.fromJson);
  }

}
