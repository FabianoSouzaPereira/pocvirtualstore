import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { Category } from './category.model';

export class CategoryService extends BaseResourceService<Category> {

  constructor() {
    super();
  }

}
