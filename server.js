const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// setup the server port
const port =process.env.PORT || 5000;

// parse request data content type application/json
app.use(bodyParser.json());


// define root route
app.get('/', (req, res)=>{
    res.send('Hello World');
});

//import user routes
const userRoutes = require('./src/routes/user.route');

//import post routes
const postRoutes = require('./src/routes/post.routes');



// create user routes 
app.use('/api/v1/user', userRoutes);

// create post routes
app.use('/api/v1/post', postRoutes);




// listen to the port
app.listen(port, ()=>{
    console.log('Server is running at port: '+port);
});