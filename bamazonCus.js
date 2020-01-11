// Require the inquirer, mysql and cli-table packages using variables
var inquirer = require('inquirer');
var mysql = require('mysql');
var Table = require('cli-table');

// Connect to the appropriate database using connection.connect