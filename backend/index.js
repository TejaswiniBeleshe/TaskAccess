const express = require("express");
const app = express();
const connectDB = require('./config/config.js')
require('dotenv').config();
connectDB()


app.listen(process.env.PORT,()=>{
    console.log(`Server has started with PORT ${process.env.PORT}`)
})