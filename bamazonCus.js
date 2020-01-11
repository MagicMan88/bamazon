// Require the inquirer, mysql and cli-table packages using variables
var inquirer = require('inquirer');
var mysql = require('mysql');
var Table = require('cli-table');

// Connect to the appropriate database using connection.connect
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

