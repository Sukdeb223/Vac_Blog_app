
const User = require('../models/user.model');
const UserModel = require('../models/user.model');

//get all user list
exports.getUserList = (req, res)=> {
    //console.log('All user list');
    UserModel.getAllUser((err, users) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('User', User);
        res.send(users)
    })
}


