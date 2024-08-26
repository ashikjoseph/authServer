
const userController= require('../Controllers/userController')



const express = require("express");


const router = new express.Router();


// 1) user registration
router.post('/user/register', userController.register)

// 2) user login
router.post('/user/login',userController.login)



module.exports = router;
