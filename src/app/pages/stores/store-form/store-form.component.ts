import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-form',
  templateUrl: './store-form.component.html',
  styleUrls: [ './store-form.component.css' ]
})
export class StoreFormComponent implements OnInit {

  pageTitle: string;

  constructor() {
    this.pageTitle = "Loja";
  }

  ngOnInit(): void {
  }

}
