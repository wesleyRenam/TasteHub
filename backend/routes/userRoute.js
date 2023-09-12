const express = require('express');
const validateRegister = require('../middlewares/validateRegister')
const validateLogin = require('../middlewares/validateLogin')
const userController = require('../controllers/userController')

const userRouter = express.Router();

userRouter.post('/register',validateRegister, userController.createUser);
userRouter.post('/login', validateLogin, userController.userLogin)

module.exports = userRouter;