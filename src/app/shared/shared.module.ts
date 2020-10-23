import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { RouterModule } from "@angular/router";
import { ServerErrorMessagesComponent } from './components/server-error-messages/server-error-messages.component';
import { FormFieldErrorComponent } from './components/form-field-error/form-field-error.component';



@NgModule({
  declarations: [
    BreadCrumbComponent,
    FormFieldErrorComponent,
    ServerErrorMessagesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    //shared modules
    CommonModule,
    ReactiveFormsModule,
    RouterModule,

    //shared components
    BreadCrumbComponent,
    FormFieldErrorComponent,
    ServerErrorMessagesComponent
  ]
})
export class SharedModule { }
