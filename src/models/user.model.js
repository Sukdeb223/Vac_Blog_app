var dbconn = require('../../config/db.config');

var User = (user) =>{
    this.U_fname = user.U_fname;
    this.U_lname = user.U_lname;
    this.U_email = user.U_email;
    this.U_pass = user.pass;
    
}

// get all user list
User.getAllUser = (result) =>{
    dbconn.query('SELECT * FROM user', (err, res)=>{
        if(err){
            console.log('Error while fetching users', err);
            result(null,err);
        }else{
            console.log('Users fetch successfully');
            result(null,res);
        }
    })
}

module.exports = User;