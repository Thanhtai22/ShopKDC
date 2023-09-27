const express = require ("express");
const dotenv = require ("dotenv");
const { default: mongoose } = require("mongoose");
const db = require('./config/db');
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
 
app.get('/',(req,res)=>{
    res.send('hello ')
})

db.connect();

app.listen(port, ()=>{
    console.log('server is running in port:' +port);
})