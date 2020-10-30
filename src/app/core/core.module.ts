import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDatabase } from "../in-memory-database";

import { AuthenticationComponent } from './authentication/authentication.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDatabase),
    RouterModule
  ],
  declarations: [
    // NavbarComponent,
    AuthenticationComponent
  ],
  exports: [
    // shared modules
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    // shared components
    // NavbarComponent
  ]
})
export class CoreModule { }
