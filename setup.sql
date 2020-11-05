USE db_angular;

CREATE TABLE IF NOT EXISTS store (
    id int PRIMARY KEY auto_increment,
    number int UNIQUE,
    name vachar(65) NOT NULL
);

CREATE  IF NOT EXISTS INDEX `idx_store_id` ON store(id);

CREATE TABLE IF NOT EXISTS products (
    id int PRIMARY KEY auto_increment,
    name varchar(65) NOT NULL,
    description varchar(65) NOT NULL,
    price DOUBLE(16,2) DEFAULT 0.00,
    Qty int NOT NULL,
    details varchar(200),
    date date NOT NULL,
    picture varchar(200) NOT NULL,
    fk_category_id int
);

CREATE  IF NOT EXISTS INDEX `idx_products_id` ON products(id);

CREATE TABLE IF NOT EXISTS order (
    id int PRIMARY KEY auto_increment,
    fk_user_id int,
    fk_store_id int,
    number int
);

CREATE  IF NOT EXISTS INDEX `idx_order_id` ON order(id);

CREATE TABLE IF NOT EXISTS user (
    id int PRIMARY KEY auto_increment,
    code int,
    name varchar(65) NOT NULL,
    address varchar(65) NOT NULL,
    neighborhood varchar(65) NOT NULL,
    city varchar(65) NOT NULL,
    state varchar(65) NOT NULL,
    country varchar(65) NOT NULL,
    zipcode int NOT NULL,
    sendemail boolean NOT NULL DEFAULT true
);

CREATE  IF NOT EXISTS INDEX `idx_user_id` ON user(id);

CREATE TABLE IF NOT EXISTS items (
    fk_products_id int,
    fk_order_id int,
    id int PRIMARY KEY auto_increment
);

CREATE  IF NOT EXISTS INDEX `idx_items_id` ON items(id);

CREATE TABLE IF NOT EXISTS account_user (
    fk_store_id int,
    fk_user_id int,
    id int PRIMARY KEY auto_increment
);

CREATE  IF NOT EXISTS INDEX `idx_account_user_id` ON account_user(id);

CREATE TABLE IF NOT EXISTS category (
    id int PRIMARY KEY auto_increment,
    name varchar(65) NOT NULL,
    description varchar(200) NOT NULL
);

SET character_set_client = utf8;
SET character_set_connection = utf8;
SET character_set_results = utf8;
SET collation_connection = utf8_general_ci;

ALTER TABLE products ADD CONSTRAINT FK_products_2
    FOREIGN KEY (fk_category_id)
    REFERENCES category (id)
    ON DELETE CASCADE;

ALTER TABLE order ADD CONSTRAINT FK_order_2
    FOREIGN KEY (fk_user_id)
    REFERENCES user (id)
    ON DELETE CASCADE;

ALTER TABLE order ADD CONSTRAINT FK_order_3
    FOREIGN KEY (fk_store_id)
    REFERENCES store (id)
    ON DELETE CASCADE;

ALTER TABLE items ADD CONSTRAINT FK_items_2
    FOREIGN KEY (fk_products_id)
    REFERENCES products (id)
    ON DELETE RESTRICT;

ALTER TABLE items ADD CONSTRAINT FK_items_3
    FOREIGN KEY (fk_order_id)
    REFERENCES order (id)
    ON DELETE RESTRICT;

ALTER TABLE account_user ADD CONSTRAINT FK_account_user_2
    FOREIGN KEY (fk_store_id)
    REFERENCES store (id)
    ON DELETE SET NULL;

ALTER TABLE account_user ADD CONSTRAINT FK_account_user_3
    FOREIGN KEY (fk_user_id)
    REFERENCES user (id)
    ON DELETE SET NULL;







-- CREATE TABLE IF NOT EXISTS users (
--     id integer not null auto_increment,
--     is_active boolean not ,
--     created_date datetime not null,
--     name varchar(100),
--     telephone varchar(30),
--     address varchar(100),
-- );
-- SET character_set_client = utf8;
-- SET character_set_connection = utf8;
-- SET character_set_results = utf8;
-- SET collation_connection = utf8_general_ci;

-- CREATE TABLE IF NOT EXISTS products (
--   id integer not null auto_increment,
--   created_date datetime not null,
--   name varchar(100),
--   price double not null,
--   Qtd integer not null
-- );

-- CREATE TABLE IF NOT EXISTS orders (
--   id integer not null auto_increment,
--   created_date datetime not null,
--   order integer not null,
--   user_id integer not null,
--   items_id integer not null
-- );

-- CREATE TABLE IF NOT EXISTS items(
--   id integer not null auto_increment,
--   created_date datetime not null,
--   name varchar(100),
-- );

-- CREATE TABLE IF NOT EXISTS categories (
--   id integer not null auto_increment,
--   created_date datetime not null,
--   name varchar(100),
-- );

-- INSERT INTO users (is_active, created_date, name) VALUES (1, "2018-07-21", 'João Fulano');
-- INSERT INTO users (is_active, created_date, name) VALUES (2, "2018-07-22", 'Pedro Alberto');
-- INSERT INTO users (is_active, created_date, name) VALUES (3, "2018-07-23", 'Lucas Silva');

-- INSERT INTO products(created_date,name,price,Qtd) VALUES (1, "2018-06-21", "Tio João", 10.60, 5);
-- INSERT INTO products(created_date,name,price,Qtd) VALUES (2, "2018-06-24", "Nacional", 3.50, 6);
-- INSERT INTO products(created_date,name,price,Qtd) VALUES (3, "2018-06-27", "Milho Bom", 2.70, 9);

-- INSERT INTO items(created_date,name) VALUES (1, "2018-06-21","Arroz");
-- INSERT INTO items(created_date,name) VALUES (2, "2018-06-21","Feijão");
-- INSERT INTO items(created_date,name) VALUES (3, "2018-06-21","Milho");

-- INSERT INTO categories(created_date,name) VALUES (1,"2018-07-21", "mercearia");
-- INSERT INTO categories(created_date,name) VALUES (2,"2018-07-21", "Ortifruti");
-- INSERT INTO categories(created_date,name) VALUES (3,"2018-07-21", "filambreria");

-- INSERT INTO orders(created_date,order, user_id,items_id) VALUES (1,"2018-07-21", 1, 1);
-- INSERT INTO orders(created_date,order, user_id,items_id) VALUES (2,"2018-07-25", 2, 3);
