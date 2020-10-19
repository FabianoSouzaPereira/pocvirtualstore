import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductFormComponent } from './pages/products/product-form/product-form.component';
import { CartFormComponent } from './pages/carts/cart-form/cart-form.component';
import { CategoryComponent } from './pages/categories/category/category.component';
import { OrderFormComponent } from './pages/orders/order-form/order-form.component';

@NgModule({
  declarations: [
    SharedModule,
    AppComponent,
    ProductFormComponent,
    CartFormComponent,
    CategoryComponent,
    OrderFormComponent
  ],
  imports: [
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
