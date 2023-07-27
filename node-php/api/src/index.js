const express = require ('express');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection;({
    host: '172.17.0.2',
    user: 'root',
    password: 'leonardo',
    database: 'leonardodb'
});

connection.connect();

app.get('/produtos', function(req, res) {
    connection.query('SELECT * FROM products', function (error, results) {
  
      if (error) { 
        throw error
      };
  
      res.send(results.map(item => ({ name: item.name, price: item.price })));
    });
  });
  

app.listen(8000,'0.0.0.0', function(){
    console.log('Ouvindo na porta 8000')
})