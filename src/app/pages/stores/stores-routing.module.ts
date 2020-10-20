import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreFormComponent } from './store-form/store-form.component';

const routes: Routes = [
  { path: '', component: StoreFormComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class StoresRoutingModule { }
