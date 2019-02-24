CREATE DATABASE dominion_db;

USE dominion_db;

CREATE TABLE products(
	id INT AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    price DECIMAL(6,2) NOT NULL,
	stock_quantity INT(5) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("PF Flyers", "Footware", 64.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Air Jordan 6", "Footware", 199.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Rawlings Elite Glove", "Baseball", 149.99, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Easton Z-Core Bat", "Baseball", 299.99, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Under Armour Batting Gloves", "Baseball", 24.99, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Taylor Made M4 Driver", "Golf", 429.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Scotty Cameron Putter", "Golf", 399.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Titleist Pro V1 Balls", "Golf", 47.99, 150);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bocce Ball Set", "Outdoors", 69.99, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cornhole Boards", "Outdoors", 99.99, 15);