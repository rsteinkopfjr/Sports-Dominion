var mysql = require('mysql');
var inquirer = require('inquirer');
var Table = require('cli-table');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "baconandeggs",
    database: "dominion_db"
});

function showProducts() {
    console.log("---------------------------");
    console.log("Current Items For Sale:");
    connection.query("SELECT * FROM products", function (err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].id + " | " + res[i].product_name + " | " + res[i].price);
        }
        console.log("---------------------------");

    purchaseItem();
    });
};

function purchaseItem() {
    inquirer.prompt([
        {
            type: "input",
            message: "Which item do you want to purchase? [Enter ID #]",
            name: "buyItem"
        },
        {
            type: "input",
            message: "How many units would you like to purchase?",
            name: "buyAmount"
        }
    ]).then(function (answer) {
        var buyItemId = parseInt(answer.buyItem);
        var buyItemAmount = parseInt(answer.buyAmount);
        connection.query("SELECT * FROM products", function (err, res) {
            console.log(res);
            var chosenItem;
                for (var i = 0; i < res.length; i++) {
                    if (res[i].id === buyItemId) {
                        chosenItem = res[i];
                    }
                }
                console.log(chosenItem);
            if (chosenItem.stock_quantity < parseInt(answer.buyAmount)) {
                console.log("Sorry, we do not have enough in stock to complete your order.");
                showProducts();
            } else {
                var newStock = chosenItem.stock_quantity - answer.buyAmount;
                connection.query(
                    "UPDATE products SET ? WHERE ?",
                    [
                        {
                            stock_quantity: newStock
                        },
                        {
                            id: chosenItem.id
                        }
                    ],
                    function (error) {
                        if (error) throw error;
                        console.log("Your total cost is " + parseFloat(chosenItem.price * answer.buyAmount));
                        showProducts();
                    }
                );
            };

        })
    })
};

connection.connect(function (err) {
    if (err) throw err;
    console.log("Welcome to Sports Dominion!");
    showProducts();
    connection.end();
});