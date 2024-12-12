const mongoose = require('mongoose');

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('Connected with DB')
    }
    catch(err){
        console.log('Not able to connect with DB')
    }
}

module.exports = connectDB