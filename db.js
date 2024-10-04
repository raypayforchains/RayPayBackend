const mysql = require('mysql");

var connection = mysql.createPool({
  connectionLimit: 50,
  host: "localhost",
  user: "root",
  password: <password>,
  database: "raypay",
});

module.exports = connection;
