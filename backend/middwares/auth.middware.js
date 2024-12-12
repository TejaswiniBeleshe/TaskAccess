const {validateuser} = require('../validators/auth.validator.js')

const validateUserInfo = async(req,res,next)=>{
    let {error} = validateuser.validate(req.body);
    if(error){
        return res.status(401).send({message:error.details[0].message})
    }
    next()
}

module.exports = {validateUserInfo}