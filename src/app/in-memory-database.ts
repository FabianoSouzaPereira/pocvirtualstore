import { Injectable, Injector } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";
import { getMaxListeners } from 'process';
import { Cart } from './pages/carts/shared/cart.model';

import { Category } from "./pages/categories/shared/category.model";
import { Item } from './pages/items/shared/Item.model';
import { Login } from './pages/logins/shared/login.model';
import { Order } from './pages/orders/shared/order.model';
import { Product } from './pages/products/shared/product.model';
import { Purchase } from './pages/purchases/shared/purchase.model';
import { Store } from './pages/stores/shared/store.model';
import { User } from './pages/users/shared/user.model';
//import { Entry } from "./pages/entries/shared/entry.model";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDatabase implements InMemoryDbService {
  createDb() {
    const categories: Category[] = [
      { id: 1, name: 'Celular', description: 'Mobile debloqueado' },
      { id: 2, name: 'Relógio Pulso', description: 'Smart Clock' },
      { id: 3, name: 'Computador Desktop', description: 'Com licença Windows' },
      { id: 4, name: 'NoteBook', description: 'Com licença Linux' },
      { id: 5, name: 'Tablet', description: '7" e 10" Polegadas' }
    ];

    const users: User[] = [
      { id: 1, email: 'jefe@gmail.com', password: '1234', address: 'Rua Saraiva, 22', address2: 'Inexistente', city: 'São Paulo', state: 'São Paulo', zipcode: '56932-442' },
      { id: 2, email: 'lucas@gmail.com', password: '4321', address: 'Rua Ipópito, 2312', address2: 'Alamenda Leste, 3232 ', city: 'São Vicente', state: 'São Paulo', zipcode: '56936-344' },
      { id: 3, email: 'ernesto@gmail.com', password: '5678', address: 'Rua Ventania, 3029', address2: 'Rua dos Anjos, 1212', city: 'São Bernado', state: 'São Paulo', zipcode: '56935-463' }
    ];

    const stores: Store[] = [

    ];
    const purchases: Purchase[] = [];
    const carts: Cart[] = [];
    const orders: Order[] = [];
    const products: Product[] = [];
    const items: Item[] = [];
    const login: Login[] = [
      {}
    ];

    return { categories, orders, products, items, users, stores, purchases, carts, login }
  }
}
