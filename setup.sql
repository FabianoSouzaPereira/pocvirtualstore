USE db_angular;
CREATE TABLE IF NOT EXISTS users (
    id integer not null auto_increment,
    is_active boolean not ,
    created_date datetime not null,
    name varchar(100),
    telephone varchar(30),
    address varchar(100),
);
SET character_set_client = utf8;
SET character_set_connection = utf8;
SET character_set_results = utf8;
SET collation_connection = utf8_general_ci;

CREATE TABLE IF NOT EXISTS products (
  id integer not null auto_increment,
  created_date datetime not null,
  name varchar(100),
  price double not null,
  Qtd integer not null
);

CREATE TABLE IF NOT EXISTS orders (
  id integer not null auto_increment,
  created_date datetime not null,
  order integer not null,
  user_id integer not null,
  items_id integer not null
);

CREATE TABLE IF NOT EXISTS items(
  id integer not null auto_increment,
  created_date datetime not null,
  name varchar(100),
);

CREATE TABLE IF NOT EXISTS categories (
  id integer not null auto_increment,
  created_date datetime not null,
  name varchar(100),
);

INSERT INTO users (is_active, created_date, name) VALUES (1, "2018-07-21", 'João Fulano');
INSERT INTO users (is_active, created_date, name) VALUES (2, "2018-07-22", 'Pedro Alberto');
INSERT INTO users (is_active, created_date, name) VALUES (3, "2018-07-23", 'Lucas Silva');

INSERT INTO products(created_date,name,price,Qtd) VALUES (1, "2018-06-21", "Tio João", 10.60, 5);
INSERT INTO products(created_date,name,price,Qtd) VALUES (2, "2018-06-24", "Nacional", 3.50, 6);
INSERT INTO products(created_date,name,price,Qtd) VALUES (3, "2018-06-27", "Milho Bom", 2.70, 9);

INSERT INTO items(created_date,name) VALUES (1, "2018-06-21","Arroz");
INSERT INTO items(created_date,name) VALUES (2, "2018-06-21","Feijão");
INSERT INTO items(created_date,name) VALUES (3, "2018-06-21","Milho");

INSERT INTO categories(created_date,name) VALUES (1,"2018-07-21", "mercearia");
INSERT INTO categories(created_date,name) VALUES (2,"2018-07-21", "Ortifruti");
INSERT INTO categories(created_date,name) VALUES (3,"2018-07-21", "filambreria");

INSERT INTO orders(created_date,order, user_id,items_id) VALUES (1,"2018-07-21", 1, 1);
INSERT INTO orders(created_date,order, user_id,items_id) VALUES (2,"2018-07-25", 2, 3);
