import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'categories', loadChildren: './pages/categories/categories.module#CategoriesModule' },
  { path: 'logins', loadChildren: './pages/logins/logins.module#LoginsModule' },
  { path: 'orders', loadChildren: './pages/orders/orders.module#OrdersModule' },
  { path: 'products', loadChildren: './pages/products/products.module#ProductsModule' },
  { path: 'purchases', loadChildren: './pages/purchases/purchases.module#PurchasesModule' },
  { path: 'users', loadChildren: './pages/users/users.module#UsersModule' },
  { path: 'stores', loadChildren: './pages/stores/stores.module#StoresModule' },

  { path: '', redirectTo: '/stores', pathMatch: 'full' },
  { path: '**', redirectTo: '/logins', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
