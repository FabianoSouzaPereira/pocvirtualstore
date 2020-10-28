import { InMemoryDbService } from "angular-in-memory-web-api";
import { Injectable, Injector } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { getMaxListeners } from 'process';

import { Category } from "./pages/categories/shared/category.model";
import { Order } from './pages/orders/shared/order.model';
import { Store } from './pages/stores/shared/store.model';
import { User } from './pages/users/shared/user.model';
import { Item } from './pages/items/shared/Item.model';
import { Cart } from './pages/carts/shared/cart.model';
import { Product } from './pages/products/shared/product.model';
import { Login } from './pages/logins/shared/login.model';
import { Purchase } from './pages/purchases/shared/purchase.model';

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
      { id: 5, name: 'Tablet', description: '7 e 10 Polegadas' }
    ];

    const users: User[] = [
      { id: 1, email: 'jefe@gmail.com', password: '1234', address: 'Rua Saraiva, 22', address2: 'Inexistente', city: 'São Paulo', state: 'São Paulo', zipcode: '56932-442' } as User,
      { id: 2, email: 'lucas@gmail.com', password: '4321', address: 'Rua Ipópito, 2312', address2: 'Alamenda Leste, 3232 ', city: 'São Vicente', state: 'São Paulo', zipcode: '56936-344' } as User,
      { id: 3, email: 'ernesto@gmail.com', password: '5678', address: 'Rua Ventania, 3029', address2: 'Rua dos Anjos, 1212', city: 'São Bernado', state: 'São Paulo', zipcode: '56935-463' } as User
    ];

    const stores: Store[] = [
      { id: 1, name: 'Teste', description: 'teste' },
      { id: 2, name: 'Teste2', description: 'teste2' }
    ];

    const purchases: Purchase[] = [];

    const carts: Cart[] = [
      { id: 1 }
    ];

    const orders: Order[] = [
      { id: 1, number: 10001, userId: users[ 1 ].id, user: users[ 1 ], paid: false, type: "send", date: "28/11/2018", amount: "200.00" } as Order,
      { id: 1, number: 10002, userId: users[ 2 ].id, user: users[ 2 ], paid: true, type: "nosend", date: "29/11/2018", amount: "250.00" } as Order,
    ];
    const products: Product[] = [
      { id: 1, name: 'Relógio sharp', description: 'Relógio de pulso', price: 123.58, qty: 32, type: 'Full', categoryId: categories[ 2 ].id, category: categories[ 2 ], date: "28/11/2018", picture: '../assets/relogiopulso001.jpg' } as Product,
      { id: 2, name: 'Celular', description: 'Celular Nokia', price: 822.48, qty: 12, type: 'Full', categoryId: categories[ 1 ].id, category: categories[ 1 ], date: "28/11/2018", picture: '../assets/celular001.jpg' } as Product,
      { id: 3, name: 'Computador Desktop', description: 'Computador Desktop Panasonic', price: 4183.50, qty: 10, type: 'Full', categoryId: categories[ 3 ].id, category: categories[ 3 ], date: "28/11/2018", picture: '../assets/desktop001.jpg' } as Product,
      { id: 4, name: 'Tablet', description: 'Tablet samsung', price: 523.12, qty: 8, type: 'Full', categoryId: categories[ 2 ].id, category: categories[ 2 ], date: "28/11/2018", picture: '../assets/tablet001.jpg' } as Product
    ];
    const items: Item[] = [
      // { id: 1, number: orders[ 1 ].number, orderId: orders[ 1 ].id, order: orders[ 1 ], productId: products[ 1 ].id, product: products[ 1 ] }
      //   { id: 2, number: orders[ 1 ].number, orderId: orders[ 1 ].id, order: orders[ 1 ], productId: products[ 3 ].id, product: products[ 3 ] },
    ];

    const login: Login[] = [
      //   {}
    ];

    return { categories, users, stores, orders, carts, products, items, login }
  }
}
