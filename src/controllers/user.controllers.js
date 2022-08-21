
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


//signup
exports.createNewUser = (req, res) =>{
    const userReqData = new UserModel(req.body);
    console.log('userReqData', userReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        UserModel.createUser(userReqData, (err, user)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Successfully', data: user.insertId})
        })
    }
}
