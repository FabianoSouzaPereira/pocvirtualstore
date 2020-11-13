import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderFormComponent } from './order-form/order-form.component';
import { OrderListComponent } from './order-list/order-list.component';

const routes: Routes = [
  { path: '', component: OrderListComponent },
  { path: 'new', component: OrderFormComponent },
  { path: ':id/edit', component: OrderFormComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class OrdersRoutingModule { }
