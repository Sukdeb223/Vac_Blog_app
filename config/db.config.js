const mysql = require('mysql');
const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'tanmoy',
    password: '123456',
    database: 'blog_app'
});

dbConn.connect(function(error){
    if(error) throw error;
    console.log('Database connected successfully!!');
});
module.exports = dbConn;
