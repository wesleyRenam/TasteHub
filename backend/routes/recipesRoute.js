const express = require('express');
const validateRecipeChange = require('../middlewares/validateRecipeChange')
const authorizeUser = require('../middlewares/authorizeUser')
const passUserId = require('../middlewares/passUserId')
const recipesController = require('../controllers/recipesController')


const recipeRouter = express.Router();

recipeRouter.get('/my-recipes', passUserId, recipesController.getMyRecipes)
recipeRouter.post('/create/:id', authorizeUser, recipesController.createUser)
recipeRouter.get('/', recipesController.getRecipes)
recipeRouter.get('/:id', recipesController.getById)
recipeRouter.delete('/:id', validateRecipeChange,  recipesController.deleteRecipe)
recipeRouter.put('/:id', validateRecipeChange, recipesController.updateRecipe)


module.exports = recipeRouter;