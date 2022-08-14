const express = require('express');

// create express app
const app = express();

// setup the server port
const port =process.env.PORT || 5000;

// define root route
app.get('/', (req, res)=>{
    res.send('Hello World');
});

//import user routes
const userRoutes = require('./src/routes/user.route');

// create user routes 
app.use('/api/v1/user', userRoutes);

// listen to the port
app.listen(port, ()=>{
    console.log('Server is running at port: '+port);
});