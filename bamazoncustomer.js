var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // username
  user: "root",

  // password
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

// var idSearch = function() {
//   inquirer.prompt({
//     name: "action",
//     type: "list",
//     message: "What product ID would you like to buy?",
//     choices: ["Find songs by artist", "Find all artists who appear more than once",
//       "Find data within a specific range", "Search for a specific song"]
//   }).then(function(answer) {