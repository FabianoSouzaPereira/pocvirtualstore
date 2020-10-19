import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { RouterModule } from "@angular/router";



@NgModule({
  declarations: [
    BreadCrumbComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    //shared modules
    CommonModule,
    RouterModule,

    //shared components
    BreadCrumbComponent
  ]
})
export class SharedModule { }
