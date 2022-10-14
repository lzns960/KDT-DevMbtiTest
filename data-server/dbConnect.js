const mysql = require('mysql'); // mysql서버와 통신하는 기능담당

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mTn@191371wl',
  port: '3306',
  database: 'mydb',
});

connection.connect();

module.exports = connection;
