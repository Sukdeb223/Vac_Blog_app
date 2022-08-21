
const Post = require('../models/post.model');
const PostModel = require('../models/post.model');

//get all Posts
exports.getAllPosts = (req, res)=> {
    //console.log('All The Posts');
    PostModel.getAllPosts((err, posts) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('Post', Post);
        res.send(posts)
    })
}



