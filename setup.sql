CREATE TABLE IF NOT EXISTS stores (
    id_stores SERIAL CONSTRAINT PK_id_stores PRIMARY KEY,
    number integer UNIQUE NOT NULL,
    name varchar(65) NOT NULL
);

CREATE TABLE IF NOT EXISTS categories (
    id_categories SERIAL CONSTRAINT pk_id_categories PRIMARY KEY,
    name varchar(65) NOT NULL,
    description varchar(200) NOT NULL
);

CREATE TABLE IF NOT EXISTS products (
    id_products SERIAL CONSTRAINT pk_id_products PRIMARY KEY,
    name varchar(65) NOT NULL,
    description varchar(65) NOT NULL,
    price numeric(12,2) DEFAULT 0.00,
    qty integer NOT NULL,
    details varchar(200),
    date date NOT NULL,
    picture varchar(200) NOT NULL,
    category_id integer NOT NULL,
    FOREIGN KEY (category_id) REFERENCES categories(id_Categories) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS users (
    id_users SERIAL CONSTRAINT pk_id_users PRIMARY KEY,
    code integer NOT NULL,
    name varchar(65) NOT NULL,
    email varchar(90) NOT NULL,
    password varchar(40) NOT NULL,
    address varchar(65) NOT NULL,
    neighborhood varchar(65) NOT NULL,
    city varchar(65) NOT NULL,
    state varchar(65) NOT NULL,
    country varchar(65) NOT NULL,
    zipcode integer NOT NULL,
    sendemail boolean NOT NULL DEFAULT true
);

CREATE TABLE IF NOT EXISTS orders (
    id_orders SERIAL CONSTRAINT pk_id_orders PRIMARY KEY,
    user_id integer NOT NULL,
    store_id integer NOT NULL,
    number integer NOT NULL,
    date date NOT NULL,
    status varchar(15),
    FOREIGN KEY (user_id) REFERENCES users(id_users) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (store_id) REFERENCES stores(id_stores) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS items (
    id_items SERIAL CONSTRAINT pk_id_items PRIMARY KEY,
    products_id integer NOT NULL,
    order_id integer NOT NULL,
    qty integer NOT NULL,
    price numeric(12,2) DEFAULT 0.00,
    total numeric(12,2) DEFAULT 0.00,
    FOREIGN KEY (products_id) REFERENCES products(id_products) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (order_id) REFERENCES orders(id_orders) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS account_users (
    id_account_users SERIAL CONSTRAINT pk_id_account_users PRIMARY KEY,
    store_id integer NOT NULL,
    user_id integer NOT NULL,
    FOREIGN KEY (store_id) REFERENCES stores(id_stores) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id_users) ON DELETE CASCADE ON UPDATE CASCADE
);


INSERT INTO public.stores(number,name) VALUES(10,'Loja 10 - Virtual Store');

INSERT INTO public.users(code, name, email, password, address,neighborhood, city, state, country,zipcode,sendemail)
VALUES(1000, 'Pedro Paulo Souza', 'pedro@gmail.com', '7c4a8d09ca3762af61e59520943dc26494f8941b','Rua Sales,47', 'Itamarati','São Pedro', 'Rio Grande do Sul','Brasil',88032-143,true);

INSERT INTO public.users(code, name, email, password, address, neighborhood, city, state, country,zipcode,sendemail)
VALUES(1001, 'Carlos Gonçalves', 'carlos@gmail.com', '7c4a8d09ca3762af61e59520943dc26494f8941b', 'Rua do Trigo,1208', 'Centro', 'Bento','Rio Grande do Norte','Brasil',78032-153,true);

INSERT INTO public.users(code, name, email, password,address, neighborhood, city, state, country,zipcode,sendemail)
VALUES(1002, 'Andresa Da Costa', 'andresa@gmail.com', '7c4a8d09ca3762af61e59520943dc26494f8941b', 'Rua Salem,5043', 'Centro', 'São Carlos','Rio Grande do Sul','Brasil',68032-134,true);

INSERT INTO public.users(code, name, email, password,address, neighborhood, city, state, country,zipcode,sendemail)
VALUES(1003, 'Ernesto Souza', 'ernesto@gmail.com', '7c4a8d09ca3762af61e59520943dc26494f8941b', 'Rua São Pedro,47', 'Cavalhada','Porto Alegre', 'Rio Grande do Sul','Brasil',58032-145,true);

INSERT INTO public.users(code, name, email, password,address, neighborhood, city, state, country,zipcode,sendemail)
VALUES(1004, 'Marola Buchecha', 'marola@gmail.com', '7c4a8d09ca3762af61e59520943dc26494f8941b', 'Rua Santos Dumont,14', 'Ferroviário', 'Montenegro','Rio Grande do Sul','Brasil',68032-146,true);

INSERT INTO account_users(store_id, user_id) VALUES(1,1);
INSERT INTO account_users(store_id, user_id) VALUES(1,2);
INSERT INTO account_users(store_id, user_id) VALUES(1,3);
INSERT INTO account_users(store_id, user_id) VALUES(1,4);
INSERT INTO account_users(store_id, user_id) VALUES(1,5);

INSERT INTO public.categories (name, description) VALUES ('Celular', 'Mobile debloqueado');
INSERT INTO public.categories (name, description) VALUES ('Relógio Pulso', 'Smart Clock');
INSERT INTO public.categories (name, description) VALUES ('NoteBook', 'Com licença Linux');
INSERT INTO public.categories (name, description) VALUES ('Tablet', '7 a 10 Polegadas');

INSERT INTO public.products(name, description,price,qty,details,date,picture,category_id)
VALUES('Sharp','Lindo Relógio, disponível em varias cores',123.58,32,'Produzido na zona franca de Manaus','11/28/2018','../assets/relogiopulso001.jpg',1);

INSERT INTO public.products(name, description,price,qty,details,date,picture,category_id)
VALUES('Samsung','Android 8, 32M, cartão 8M',523.58,32,'Produzido na zona franca de Manaus','11/28/2018','../assets/relogiopulso001.jpg',2);

INSERT INTO public.products(name, description,price,qty,details,date,picture,category_id)
VALUES('Postivo','500G HD, Core i5, 8G ram',4183.50,10,'Produzido na zona franca de Manaus','11/28/2018','../assets/desktop001.jpg',3);

INSERT INTO public.products(name, description,price,qty,details,date,picture,category_id)
VALUES('Sharp','Lindo Relógio, disponível em varias cores',123.58,32,'Produzido na zona franca de Manaus','11/28/2018','../assets/tablet001.jpg',4);

INSERT INTO public.products(name, description,price,qty,details,date,picture,category_id)
VALUES('Nokia','Varias cores e modelos',543.12,18,'Produzido na zona franca de Manaus','02/11/2018','../assets/tablet001.jpg',4);

INSERT INTO public.orders(user_id,store_id,number, date, status)VALUES(1, 1, 14501,'02/11/2019','Pago');
INSERT INTO public.orders(user_id,store_id,number, date, status)VALUES(5, 1, 14502,'02/11/2019','pendente');
INSERT INTO public.orders(user_id,store_id,number, date, status)VALUES(4, 1, 14503,'02/11/2019','Pago');
INSERT INTO public.orders(user_id,store_id,number, date, status)VALUES(3, 1, 14504,'02/11/2019','pendente');

INSERT INTO public.items(products_id,order_id, qty, price, total)VALUES(1, 1, 2, 123.58, 247.16);
INSERT INTO public.items(products_id,order_id, qty, price, total)VALUES(2, 1, 1, 523.58, 523.58);
INSERT INTO public.items(products_id,order_id, qty, price, total)VALUES(3, 1, 1, 4183.50, 4183.50);
