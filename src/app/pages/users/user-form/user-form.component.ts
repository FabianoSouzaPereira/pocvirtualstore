import { Component, OnInit, Injector } from '@angular/core';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form.component';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';
import { Validators } from "@angular/forms";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: [ './user-form.component.css' ]
})
export class UserFormComponent extends BaseResourceFormComponent<User> {
  [ x: string ]: any;


  constructor(protected userService: UserService, protected injector: Injector) {
    super(injector, userService, User.fromJson);
  }

  protected buildResourceForm(): void {
    this.resourceForm = this.formBuilder.group({
      id: [ null ],
      email: [ null, [ Validators.required, Validators.minLength(10) ] ],
      password: [ null, [ Validators.required, Validators.minLength(6) ] ],
      address: [ null ],
      address2: [ null ],
      city: [ null ],
      state: [ null ],
      zipcode: [ null, [ Validators.required, Validators.minLength(8) ] ]
    });
  }

  protected creationPageTitle(): string {
    return "Cadastro de Nova Categoria";
  }

  protected editionPageTitle(): string {
    const userEmail = this.resource.email || "";
    return "Editando Categoria: " + userEmail;
  }
}
