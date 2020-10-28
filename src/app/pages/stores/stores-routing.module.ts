import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreListComponent } from './store-list/store-list.component';
import { StoreFormComponent } from './store-form/store-form.component';

const routes: Routes = [
  { path: '', component: StoreListComponent },
  { path: 'new', component: StoreFormComponent },
  { path: ':id/edit', component: StoreFormComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class StoresRoutingModule { }
