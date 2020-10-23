import { OnInit, AfterContentChecked, Injector } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { BaseResourceModel } from '../models/base-resource.model';

import { switchMap } from "rxjs/operators";

import toastr from "toastr";
import { Injectable } from '@angular/core';
import { BaseResourceService } from '../services/base-resource.service';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseResourceFormComponent<T extends BaseResourceModel> implements OnInit, AfterContentChecked {

  currentAction: string;
  resourceForm: FormGroup;
  pageTitle: string;
  serverErrorMessages: string[] = null;
  submittingForm: boolean = false;

  protected route: ActivatedRoute;
  protected router: Router;
  protected formBuilder: FormBuilder;

  constructor(
    protected injector: Injector,
    protected resourceService: BaseResourceService<T>,
  ) {
    this.route = this.injector.get(ActivatedRoute);
    this.router = this.injector.get(Router);
    this.formBuilder = this.injector.get(FormBuilder);
  }

  ngOnInit() {
    this.setCurrentAction();
    this.buildResourceForm();
    this.loadResource();
  }

  setCurrentAction() {
    if (this.route.snapshot.url[ 0 ].path == "new")
      this.currentAction = "new"
    else
      this.currentAction = "edit"
  }

  protected abstract buildResourceForm(): void;

  loadResource() {
    throw new Error('Method not implemented.');
  }

  ngAfterContentChecked() {
    this.setPageTitle();
  }


  protected setPageTitle() {
    if (this.currentAction == 'new')
      this.pageTitle = this.creationPageTitle();
    else {
      this.pageTitle = this.editionPageTitle();
    }
  }

  protected creationPageTitle(): string {
    return "Novo"
  }

  protected editionPageTitle(): string {
    return "Edição"
  }


}
