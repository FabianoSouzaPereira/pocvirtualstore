import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartFormComponent } from './cart-form/cart-form.component';
import { CartListComponent } from './cart-list/cart-list.component';

const routes: Routes = [
  { path: '', component: CartListComponent },
  { path: 'new', component: CartFormComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class CartsRoutingModule { }
