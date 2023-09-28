const express = require ("express");
const dotenv = require ("dotenv");
const { default: mongoose } = require("mongoose");
const db = require('./config/db');
const routes = require("./routes");
const bodyParser = require("body-parser");
dotenv.config();

const app = express();
// const port = process.env.PORT || 3001;
// const port = 3001;
 

app.use(bodyParser.json());

routes(app);
db.connect()


app.listen(3001, ()=>{
    console.log('server is running in port: 3001');
})