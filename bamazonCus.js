// Require the inquirer, mysql and cli-table packages using variables
var inquirer = require('inquirer');
var mysql = require('mysql');
var Table = require('cli-table');

// Connect to the appropriate database
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Ilovetolearn!',
    database: 'bamazon'
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected as id " + connection.threadId);
});

// Function to display the available products
var displayProd = function () {
    var query = 'SELECT * FROM products';
    connection.query(query, function (err, res) {
        if (err) throw err;
        // Display the table using the cli-table package
        var displayTable = new Table({
            head: ['Item ID', 'Product Name', 'Category', 'Price', 'Quantity'],
            colWidths: [10, 25, 25, 10, 14]
        });
        // Loop through the results using a for loop
        for (var i = 0; i < res.length; i++) {
            displayTable.push(
                [res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]
            );
        }
        console.log(displayTable.toString());
        // Call prompt to purchase function
        purchasePrompt();
    });
}

// Function for purchasePrompt
function purchasePrompt() {
    inquirer.prompt([{
            name: 'ID',
            type: 'input',
            message: 'Enter the item ID you want to purchase.',
            filter: Number
        },
        {
            name: 'Quantity',
            type: 'input',
            message: 'How many items do you want to purchase?',
            filter: Number
        },

    ]).then(function (answer) {
        var quantityNeeded = answer.Quantity;
        var IDrequested = answer.ID;
        purchaseOrder(IDrequested, quantityNeeded);
    });
};

// Function for purchaseOrder
function purchaseOrder(ID, payAmount) {
    connection.query('SELECT * FROM products WHERE item_id = ' + ID, function (err, res) {
        if (err) {
            console.log(err)
        };
        if (payAmount <= res[0].stock_quantity) {
            var totalCost = res[0].price * payAmount;
            console.log('Your item is in stock!');
            console.log('The total cost for ' + payAmount + ' ' + res[0].product_name + ' is ' + totalCost + ' Thank you!');
            connection.query("UPDATE products SET stock_quantity = stock_quantity - " + payAmount + "WHERE item_id = " + ID);
        } else {
            console.log('Our apologies, we don not have enough ' + res[0].product_name + 'to complete your order.');
        };
        displayProducts();
    });
};

displayProducts();