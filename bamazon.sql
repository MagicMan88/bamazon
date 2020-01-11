
DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;

USE bamazon;

/* Creating the products table */
CREATE TABLE products(
	item_id INT(4) NOT NULL,
	product_name VARCHAR(100) NOT NULL,
	department_name VARCHAR(100) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity INT(20) NOT NULL,
	PRIMARY KEY (item_id)
);

Select * FROM products;

/* Inserting data into the products table */
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) 
VALUES (100, "boots", "soccer", 99.99, 50),
	   (200, "jerseys", "basketball", 89.99, 20),
	   (300, "helmet", "football", 99.99, 50),
	   (400, "jerseys", "hockey", 129.99, 20),
	   (302, "pants", "football", 39.99, 15),
	   (101, "shorts", "soccer", 19.99, 19),
	   (500, "gloves", "baseball", 49.99, 11),
	   (502, "bats", "baseball", 69.99, 10),
	   (405, "pucks", "hockey", 9.99, 150),
	   (201, "shoes", "basketball", 79.99, 15)