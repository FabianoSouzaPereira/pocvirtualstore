import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartFormComponent } from './cart-form/cart-form.component';

const routes: Routes = [
  { path: '', component: CartFormComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class CartsRoutingModule { }
