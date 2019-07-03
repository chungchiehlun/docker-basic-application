const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'mypass'
})

connection.query('SHOW DATABASES', (error, results, fields) => {
  if (error) throw error
  console.dir(results)
  // connection.end()
});
