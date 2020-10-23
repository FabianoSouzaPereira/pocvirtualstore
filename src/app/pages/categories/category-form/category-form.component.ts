import { Component, Injector } from '@angular/core';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form.component';
import { Category } from '../shared/category.model';
import { CategoryService } from '../shared/category.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: [ './category-form.component.css' ]
})
export class CategoryFormComponent extends BaseResourceFormComponent<Category> {

  constructor(protected categoryService: CategoryService, protected injector: Injector) {
    super(injector, new Category(), categoryService, Category.fromJson);
  }

  protected buildResourceForm(): void {
    throw new Error('Method not implemented.');
  }


}
