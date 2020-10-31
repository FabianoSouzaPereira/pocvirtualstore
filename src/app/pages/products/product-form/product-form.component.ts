import { Component, Injector, OnInit } from '@angular/core';
import { Validators } from "@angular/forms";
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';
import { Product } from '../shared/product.model';
import { ProductService } from '../shared/product.service';
import { Category } from "../../categories/shared/category.model";
import { CategoryService } from "../../categories/shared/category.service";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: [ './product-form.component.css' ]
})
export class ProductFormComponent extends BaseResourceFormComponent<Product> implements OnInit {

  categories: Array<Category>;

  constructor(
    protected productSevice: ProductService,
    protected categoryService: CategoryService,
    protected injector: Injector
  ) {
    super(injector, new Product(), productSevice, Product.fromJson);
  }

  protected buildResourceForm(): void {
    this.resourceForm = this.formBuilder.group({
      id: [ null ],
      name: [ null, [ Validators.required, Validators.minLength(2) ] ],
      description: [ null ],
      type: [ null ],
      details: [ null ],
      qty: [ null ],
      price: [ null ],
      date: [ null ],
      categoryId: [ null ],
      category: [ null ],
      picture: [ null ],
    });
  }

  ngOnInit() {
    this.loadCategories();
    super.ngOnInit();
  }

  get typeOptions(): Array<any> {
    return Object.entries(Product.types).map(
      ([ value, text ]) => {
        return {
          text: text,
          value: value
        }
      }
    )
  }

  private loadCategories() {
    this.categoryService.getAll().subscribe(
      categories => this.categories = categories
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
