import { Component, Injector, OnInit } from '@angular/core';
import { BaseResourceFormComponent } from '../../../shared/components/base-resource-form/base-resource-form.component';
import { Item } from '../shared/Item.model';
import { ItemService } from '../shared/Item.service';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: [ './item-form.component.css' ]
})
export class ItemFormComponent extends BaseResourceFormComponent<Item> {

  constructor(protected itemService: ItemService, protected injector: Injector) {
    super(injector, new Item(), itemService, Item.fromJson);
  }

  protected buildResourceForm(): void {
    this.resourceForm = this.formBuilder.group({
      id: [ null ],
      number: [ null ]
    });
  }

  protected creationPageTitle(): string {
    return "Cadastro de Novo Lançamento";
  }

  protected editionPageTitle(): string {
    const resourceName = this.resource.number || "";
    return "Editando Lançamento: " + resourceName;
  }

}
