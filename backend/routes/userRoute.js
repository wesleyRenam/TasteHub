const express = require('express');
const validateRegister = require('../middlewares/validateRegister')
const userController = require('../controllers/userController')

const userRouter = express.Router();

userRouter.post('/register',validateRegister, userController.createUser);

module.exports = userRouter;