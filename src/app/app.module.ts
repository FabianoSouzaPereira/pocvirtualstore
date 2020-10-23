import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginsModule } from './pages/logins/logins.module';
import { UsersModule } from './pages/users/users.module';
import { PurchasesModule } from './pages/purchases/purchases.module';
import { ProductsModule } from './pages/products/products.module';
import { OrdersModule } from './pages/orders/orders.module';
import { CategoriesModule } from './pages/categories/categories.module';
import { CartsModule } from './pages/carts/carts.module';
import { StoresModule } from './pages/stores/stores.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
    SharedModule,
    AppRoutingModule,
    LoginsModule,
    UsersModule,
    PurchasesModule,
    ProductsModule,
    OrdersModule,
    CategoriesModule,
    CartsModule,
    StoresModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
