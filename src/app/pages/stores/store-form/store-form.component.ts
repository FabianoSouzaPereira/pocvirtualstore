import { Component, Injector, OnInit } from '@angular/core';
import { Validators } from "@angular/forms";
import { BaseResourceFormComponent } from '../../../shared/components/base-resource-form/base-resource-form.component';
import { Store } from '../shared/store.model';
import { StoreService } from '../shared/store.service';

@Component({
  selector: 'app-store-form',
  templateUrl: './store-form.component.html',
  styleUrls: [ './store-form.component.css' ]
})
export class StoreFormComponent extends BaseResourceFormComponent<Store> {

  pageTitle: string;

  constructor(protected storeService: StoreService, protected injector: Injector) {
    super(injector, new Store(), storeService, Store.fromJson);
    this.pageTitle = "Loja";
  }

  protected buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      id: [ null ],
      name: [ null, [ Validators.required, Validators.minLength(2) ] ],
      description: [ null ]
    });
  }


}
