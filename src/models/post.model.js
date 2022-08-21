var dbconn = require('../../config/db.config');

var Post = (post) =>{
    this.P_title = post.P_title;
    this.P_sdes = post.P_sdes;
    this.P_ldes = post.P_ldes;
    this.P_img= post.P_img;
    
}

// get all Postss
Post.getAllPosts = (result) =>{
    dbconn.query('SELECT * FROM post', (err, res)=>{
        if(err){
            console.log('Error while fetching posts', err);
            result(null,err);
        }else{
            console.log('Posts fetch successfully');
            result(null,res);
        }
    })
}

module.exports = Post;