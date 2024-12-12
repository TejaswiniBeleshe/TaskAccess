const UserData = require('../models/auth.model.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
class AuthLogics{
    newUser = async(payload)=>{
        // console.log(payload)
        return UserData.create({...payload,password:await this.hashPassword(payload.password)})
    }
    checkUser(email){
        return UserData.findOne({email})
    }
    hashPassword(password){
        // console.log(password)
        return bcrypt.hash(password,10)
    }
    comparePassword(planetext,hashpassword){
        return bcrypt.compare(planetext,hashpassword)
    }
    createToken(payload){
        return jwt.sign(payload,process.env.SECREAT)
    }
}

module.exports = AuthLogics;