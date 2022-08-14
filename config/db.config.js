const mysql = require('mysql');
const dbconn = mysql.createConnection({
    host: 'localhost',
    user: 'tanmoy',
    password: '123456',
    database: 'blog_app_vac'
});

dbconn.connect(function(error){
    if(error) throw error;
    console.log('Database connected successfully!!');
});
module.exports = dbconn;
