import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './core/authentication/authentication.component';
import { LoginFormComponent } from './core/guards/login/login-form.component';
import { AuthGuard } from './core/guards/login/shared/auth.guard';
import { NotfoundComponent } from './pages/notfound/notfound.component';

const routes: Routes = [
  {
    path: '', component: AppComponent,
    children: [
      { path: 'categories', loadChildren: './pages/categories/categories.module#CategoriesModule' },
      { path: 'orders', loadChildren: './pages/orders/orders.module#OrdersModule' },
      { path: 'products', loadChildren: './pages/products/products.module#ProductsModule' },
      { path: 'purchases', loadChildren: './pages/purchases/purchases.module#PurchasesModule' },
      { path: 'users', loadChildren: './pages/users/users.module#UsersModule' },
      { path: 'stores', loadChildren: './pages/stores/stores.module#StoresModule' },
      { path: 'carts', loadChildren: './pages/carts/carts.module#CartsModule' },
      { path: 'items', loadChildren: '.pages/items/items.module#ItemsModule' },
      { path: '', redirectTo: 'stores', pathMatch: 'full' },
    ],
    canActivate: [ AuthGuard ]
  },
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'login', component: LoginFormComponent },
      // { path: 'create-account', component: CreateAccountComponent }

    ]
  },
  { path: '404', redirectTo: '/notfound', pathMatch: 'full' },
  { path: 'notfound', component: NotfoundComponent },
  { path: '**', redirectTo: '404' },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
