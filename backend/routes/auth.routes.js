const express = require('express');
const router = express.Router();
const {AddNewUser} = require('../controllers/auth.controller.js');
 const {validateUserInfo} = require('../middwares/auth.middware.js')


router.post('/register',validateUserInfo,AddNewUser);
// router.post('auth/login')
module.exports = router