# bamazon

This application implements a simple command line based storefront using the npm inquirer package and the MySQL database package. 
The application presents one interface: customer. I am also developing a manager interface that will be deployed at a later time.

# MySQL Database Setup
In order to run this application, you should have the MySQL database already set up on your machine. If you don't, visit the MySQL installation page to install the version you need for your operating system. Once you have MySQL isntalled, you will be able to create the bamazon database and the products table with the SQL code found in bamazon.sql. Run this code inside your MySQL client to populate the database, then you will be ready to proceed with running the bamazon customer interface.

# Customer Interface
The customer interface allows the user to view the current inventory of store items: item IDs, descriptions, department in which the item is located and price. The user is then able to purchase one of the existing items by entering the item ID and the desired quantity. If the selected quantity is currently in stock, the user's order is fulfilled, displaying the total purchase price and updating the store database. If the desired quantity is not available, the user is prompted to modify their order.

To run the customer interface please follow the steps below:

- git clone https://github.com/MagicMan88/bamazon.git
- cd bamazon
- npm install
- node bamazonCustomer.js

# bamazon demo
Below is a link to a video that demos the application.
https://drive.google.com/open?id=1fe3Id0AEoEPkU-cP8HaLzcVtJyQ_88K5
