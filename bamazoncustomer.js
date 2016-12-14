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
  if (err) {
    throw err;
  }
  console.log(res);
});
connection.end();

var runSearch = function() {
  inquirer.prompt({
    name: "action",
    type: "list",
    message: "What product ID would you like to buy?",
    choices: ["Find songs by artist", "Find all artists who appear more than once",
      "Find data within a specific range", "Search for a specific song"]
  }).then(function(answer) {