const express = require('express');
const validateRecipeChange = require('../middlewares/validateRecipeChange')
const authorizeUser = require('../middlewares/authorizeUser')
const recipesController = require('../controllers/recipesController')


const recipeRouter = express.Router();

recipeRouter.post('/create/:id', authorizeUser, recipesController.createUser)
recipeRouter.get('/', recipesController.getRecipes)
recipeRouter.delete('/:id', validateRecipeChange,  recipesController.deleteRecipe)
recipeRouter.put('/:id', validateRecipeChange, recipesController.updateRecipe)


module.exports = recipeRouter;