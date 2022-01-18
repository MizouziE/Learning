const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  database: 'security',
  user: 'root',
  password: 'your-pw',
  //multipleStatements: true // This line here leaves you open to sql-injection attacks
})

module.exports = pool;