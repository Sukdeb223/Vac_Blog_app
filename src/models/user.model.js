var dbConn = require('../../config/db.config');

var User = function(user){
    this.U_fname = user.U_fname;
    this.U_lname = user.U_lname;
    this.U_email = user.U_email;
    this.U_phno = user.U_phno;
    this.U_bio = user.U_bio;
    this.U_pass = user.U_pass; 
}

// sign up
User.createUser = (userReqData, result) =>{
    dbConn.query('INSERT INTO user SET ? ;', userReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('Registration successfully');
            result(null, res)
        }
    })
}


// get all user list
User.getAllUser = (result) =>{
    dbConn.query('SELECT * FROM user', (err, res)=>{
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