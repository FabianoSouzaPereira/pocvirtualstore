USE db_angular;
CREATE TABLE IF NOT EXISTS user (
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
INSERT INTO user (is_active, created_date, name) VALUES (1, "2018-07-21", 'João Fulano');
