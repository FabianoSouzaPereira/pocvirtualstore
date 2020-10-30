import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginsModule } from './core/guards/login/logins.module';
import { UsersModule } from './pages/users/users.module';
import { PurchasesModule } from './pages/purchases/purchases.module';
import { ProductsModule } from './pages/products/products.module';
import { OrdersModule } from './pages/orders/orders.module';
import { CategoriesModule } from './pages/categories/categories.module';
import { CartsModule } from './pages/carts/carts.module';
import { StoresModule } from './pages/stores/stores.module';
import { ItemsModule } from './pages/items/items.module';
import { NotfoundModule } from './pages/notfound/notfound.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    AppRoutingModule,
    LoginsModule,
    UsersModule,
    PurchasesModule,
    ProductsModule,
    OrdersModule,
    CategoriesModule,
    CartsModule,
    StoresModule,
    ItemsModule,
    NotfoundModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
