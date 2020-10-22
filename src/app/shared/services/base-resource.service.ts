import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { BaseResourceModel } from '../models/base-resource.model';

export abstract class BaseResourceService<T extends BaseResourceModel> {

  protected http: HttpClient;
  resourceForm: FormGroup;
  pageTitle: string;
  protected route: ActivatedRoute;
  protected router: Router;
  protected formBuilder: FormBuilder;
  serverErrorMessages: string[] = null;
  submittingForm: boolean = false;

  protected handleError(error: any): Observable<any> {
    console.log("ERRO NA REQUISIÇÃO => ", error);
    return throwError(error);
  }

}
