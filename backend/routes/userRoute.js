const express = require('express');
const validateRegister = require('../middlewares/validateRegister')
const validateLogin = require('../middlewares/validateLogin')
const authorizeUser = require('../middlewares/authorizeUser')
const userController = require('../controllers/userController')

const userRouter = express.Router();

userRouter.post('/register',validateRegister, userController.createUser);
userRouter.post('/login', validateLogin, userController.userLogin)
userRouter.post('/user/:id', authorizeUser, userController.user)

module.exports = userRouter;