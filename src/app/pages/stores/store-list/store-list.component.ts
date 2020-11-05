import { Component, OnInit } from '@angular/core';
import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.component';
import { Store } from '../shared/store.model';
import { StoreService } from '../shared/store.service';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: [ './store-list.component.css' ]
})
export class StoreListComponent extends BaseResourceListComponent<Store> implements OnInit {

  constructor(private storeService: StoreService) {
    super(storeService);
  }


}
