import { Component, OnInit, Injector } from '@angular/core';
import { BaseResourceFormComponent } from '../../../shared/components/base-resource-form/base-resource-form.component';
import { User } from '../shared/user.model';
import * as CryptoJS from 'crypto-js';
import { UserService } from '../shared/user.service';
import { Validators } from "@angular/forms";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: [ './user-form.component.css' ]
})
export class UserFormComponent extends BaseResourceFormComponent<User> {
  dataToEncrypt: any = { password: this.resourceForm.get('password') };
  encryptedData: string = '';
  secretkey: string = this.dataToEncrypt;

  constructor(protected userService: UserService, protected injector: Injector) {
    super(injector, new User(), userService, User.fromJson);
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
    return "Cadastro de Novo Usuário";
  }

  protected editionPageTitle(): string {
    const userEmail = this.resource.email || "";
    return "Editando Usuário: " + userEmail;
  }

  Encrypt() {
    this.encryptedData = CryptoJS.AES.encrypt(JSON.stringify(this.dataToEncrypt), this.secretkey).toString();
    console.log(this.encryptedData)
  }

  Decript() {
    let bytes = CryptoJS.AES.decrypt(this.encryptedData, this.secretkey);
    var obj = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    console.log(obj.password);
  }

}
