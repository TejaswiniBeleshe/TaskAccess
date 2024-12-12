const Joi = require('joi');

const validateuser = Joi.object({
    username:Joi.string().min(3),
    email:Joi.string().pattern(new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')),
    password:Joi.string().min(8)
})
module.exports = {validateuser}