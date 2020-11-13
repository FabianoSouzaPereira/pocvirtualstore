import { Component, Injector, OnInit } from '@angular/core';
import { Validators } from "@angular/forms";
import { BaseResourceFormComponent } from '../../../shared/components/base-resource-form/base-resource-form.component';
import { Product } from '../../products/shared/product.model';
import { ProductService } from '../../products/shared/product.service';
import { Store } from '../shared/store.model';
import { StoreService } from '../shared/store.service';

@Component({
  selector: 'app-store-form',
  templateUrl: './store-form.component.html',
  styleUrls: [ './store-form.component.css' ]
})
export class StoreFormComponent extends BaseResourceFormComponent<Store> implements OnInit {

  pageTitle: string;
  products: Array<Product>;

  constructor(
    protected storeService: StoreService,
    protected productService: ProductService,
    protected injector: Injector
  ) {
    super(injector, new Store(), storeService, Store.fromJson);
    this.pageTitle = "Loja";
  }

  ngOnInit() {
    this.loadProducts();
    super.ngOnInit();
  }

  protected buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      id: [ null ],
      name: [ null, [ Validators.required, Validators.minLength(2) ] ],
      description: [ null ],
      productId: [ null ],
      product: [ null ]
    });
  }
  private loadProducts() {
    this.productService.getAll().subscribe(
      products => this.products = products
    );
  }

  protected creationPageTitle(): string {
    return "Cadastro de Novo Lançamento";
  }

  protected editionPageTitle(): string {
    const resourceName = this.resource.name || "";
    return "Editando Lançamento: " + resourceName;
  }

}
