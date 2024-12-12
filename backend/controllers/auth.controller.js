const AuthLogics = require('../services/auth.service.js');
const allAuthLogics = new AuthLogics()

const AddNewUser = async(req,res)=>{
    try{
        let response = await allAuthLogics.checkUser(req.email);
        if(response){
            return res.status(409).send({message:"User already exist"})
        }
        let new_user = await allAuthLogics.newUser(req.body);
        // console.log(new_user)
        if(new_user){
            return res.status(201).send({message:"Registed Succesfully",token:await allAuthLogics.createToken(new_user.id)})
        }   
    }
    catch(err){
        console.log(err)
        return res.status(500).send({message:err})
    }
}
module.exports = {AddNewUser}