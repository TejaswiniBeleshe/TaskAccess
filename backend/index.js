const express = require("express");
const app = express();
const connectDB = require('./config/config.js');
const authRouter = require('./routes/auth.routes.js');
const bodyparser = require('body-parser');

require('dotenv').config();
connectDB()
app.use(bodyparser.json())

app.use('/auth',authRouter)

app.listen(process.env.PORT,()=>{
    console.log(`Server has started with PORT ${process.env.PORT}`)
})