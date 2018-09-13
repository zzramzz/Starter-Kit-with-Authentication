const config = require('config');

require('dotenv').config({path:'../config/.env'})
const mongoose = require('mongoose');
const users = require('./routes/user_route');
const auth = require('./routes/auth_route');
const dashboard = require('./routes/user_dashboard');
const express = require('express');
 
const app = express();

if(!config.get('jwtPrivateKey')){
    console.error('FATAL ERROR: jwtPrivateKey is  not defined');
    process.exit(1);
}

mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true })
.then(()=>console.log("connected to mongo"))
.catch((err)=>console.log(err));


app.use(express.json());
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/dashboard',dashboard);




let port = process.env.PORT || 3000
app.listen(port, ()=>console.log(`listening to port : ${port}`));