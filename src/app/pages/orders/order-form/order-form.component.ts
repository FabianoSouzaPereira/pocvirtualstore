import { Component, Injector, OnInit } from '@angular/core';
import { BaseResourceFormComponent } from '../../../shared/components/base-resource-form/base-resource-form.component';
import { Order } from '../shared/order.model';
import { OrderService } from '../shared/order.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: [ './order-form.component.css' ]
})
export class OrderFormComponent extends BaseResourceFormComponent<Order> {

  constructor(protected orderService: OrderService, protected injector: Injector) {
    super(injector, new Order(), orderService, Order.fromJson);
  }

  protected buildResourceForm(): void {
    this.resourceForm = this.formBuilder.group({
      id: [ null ],
      number: [ null ],
      userId: [ null ],
      user: [ null ],
      date: [ null ],
      paid: [ null ],
    });
  }

  protected creationPageTitle(): string {
    return "Cadastro de Novo Lançamento";
  }

  protected editionPageTitle(): string {
    const resourceName = this.resource.number || "";
    return "Editando Lançamento: " + resourceName;
  }

}
