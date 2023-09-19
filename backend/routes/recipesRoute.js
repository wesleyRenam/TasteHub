const express = require('express');
const authorizeUser = require('../middlewares/authorizeUser')
const recipesController = require('../controllers/recipesController')


const recipeRouter = express.Router();

recipeRouter.post('/:id/create', authorizeUser, recipesController.createUser)
recipeRouter.get('/', recipesController.getRecipes)


module.exports = recipeRouter;