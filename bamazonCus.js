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

connection.connect(function(err) {
    if(err) throw err;
    console.log("Connected as id " + connection.threadId);
});

// Function to display the available products
var displayProd = function() {
    var query = 'SELECT * FROM products';
    connection.query(query, function(err, res) {
        if(err) throw err;
        // Display the table using the cli-table package
        var displayTable = new Table ({
            head: ['Item ID', 'Product Name', 'Category', 'Price', 'Quantity'],
            colWidths: [10,25,25,10,14]
        });
        // Loop through the results using a for loop
        for (var i = 0; i < res.length; i++){
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
    inquirer.prompt([
        {
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

    ]).then(function(answer){
        var quantityNeeded = answer.Quantity;
        var IDrequested = answer.ID;
        purchaseOrder(IDrequested, quantityNeeded);
    });
};

