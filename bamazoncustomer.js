var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,


  user: "root",


  password: "123",
  database: "Bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});

connection.query("SELECT * FROM products", function (err, res) {
  for (var i = 0; i < res.length; i++) {
      console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity);
}
console.log("-----------------------------------");
}); 

connection.end();

var start = function() {
    connection.query("SELECT * FROM products", function(err, res) {
    console.log(res);
  inquirer.prompt({
    name: "choice",
    type: "rawlist",
    choices: function(value) {
        var choiceArray = [];
        for (var i = 0; i < res.length; i++) {
          choiceArray.push(res[i].item_id);
        } 
        return choiceArray;
    },
    message: "What item ID would you like to purchase?"
  }).then(function(answer){
    var query = "SELECT * FROM products WHERE ?";
      for (var i = 0; i < res.length; i++) {
        if (res[i].item_id === answer.choices) {
            var chosenItem = res[i];
          inquirer.prompt({
            name: "quantity",
            type: "input",
            message: "How many would you like to buy?"
    }).then(function(answer){
        for (var i = 0; i < res.length; i++) {
            if(answer === res[i].stock_quantity){
               console.log("Thank you for your selection");
                start();
            } else{
                consonle.log("Sorry, please select another quantity");
                start();
            }
        });
       }
       var inventory = function() {
           connection.query("SELECT stock_quantity FROM products");{
               console.log(res);
           }
           for (var i = 0; i < res[i].stock_quantity; i--) {
              console.log(stock_quantity);
           };
           start();
       };
       }
      }
    });
   });
  };
