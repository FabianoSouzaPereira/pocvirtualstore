import { BaseResourceModel } from "../models/base-resource.model";

import { Injector } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";

// const baseUrl = 'http://localhost:3000/api';
const baseUrl = 'api';

export abstract class BaseResourceService<T extends BaseResourceModel> {

  protected http: HttpClient;
  protected baseURl: string;

  constructor(
    protected apiPath: string,
    protected injector: Injector,
    protected jsonDataToResourceFn: (jsonData: any) => T
  ) {
    this.http = injector.get(HttpClient);
    this.baseURl = baseUrl;
  }

  /** Generic method that requests and converts all Json data into "api" request.
   *  This method uses the bind method that keeps "this" as the initial context.
   *  Preventing that "this" from going to another context.
  */
  getAll(): Observable<T[]> {
    const url = `${ this.baseURl }/${ this.apiPath }`;
    return this.http.get(url).pipe(
      map(this.jsonDataToResources.bind(this)),
      catchError(this.handleError)
    )
  }

  getById(id: number): Observable<T> {
    const url = `${ this.baseURl }/${ this.apiPath }/${ id }`;

    return this.http.get(url).pipe(
      map(this.jsonDataToResource.bind(this)),
      catchError(this.handleError)
    )
  }

  create(resource: T): Observable<T> {
    const url = `${ this.baseURl }/${ this.apiPath }`;

    return this.http.post(url, resource).pipe(
      map(this.jsonDataToResource.bind(this)),
      catchError(this.handleError)
    )
  }

  update(resource: T): Observable<T> {
    const url = `${ this.baseURl }/${ this.apiPath }/${ resource.id }`;

    return this.http.put(url, resource).pipe(
      map(() => resource),
      catchError(this.handleError)
    )
  }

  delete(id: number): Observable<any> {
    const url = `${ this.baseURl }/${ this.apiPath }/${ id }`;

    return this.http.delete(url).pipe(
      map(() => null),
      catchError(this.handleError)
    )
  }



  // PROTECTED METHODS

  protected jsonDataToResources(jsonData: any[]): T[] {
    const resources: T[] = [];
    jsonData.forEach(
      element => resources.push(this.jsonDataToResourceFn(element))
    );
    return resources;
  }

  protected jsonDataToResource(jsonData: any): T {
    return this.jsonDataToResourceFn(jsonData);
  }

  protected handleError(error: any): Observable<any> {
    console.log("ERRO NA REQUISIÇÃO => ", error);
    return throwError(error);
  }

}
