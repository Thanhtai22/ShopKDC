const express = require("express");
const dotenv = require('dotenv');
const mongoose = require("mongoose");
const routes = require('./routes')
const cors = require('cors');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const db = require('./config/db/index')
const port =  3001

dotenv.config()

const app = express()

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ limit: '50mb' }))
// app.use(bodyParser.json())
app.use(cookieParser())

routes(app);

db.connect()
    .then(() => {
        console.log('Connect Db success!')
    })
    .catch((err) => {
        console.log(err)
    })
app.listen(port, () => {
    console.log('Server is running in port: ', + port)
})