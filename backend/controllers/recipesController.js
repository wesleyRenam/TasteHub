const recipesService = require('../services/recipesService')

const User = require('../models/User')

const recipesController = {
  createUser: async (req, res) => {
    const {title, description, ingredients, instructions, tags, image} = req.body
    const {  id } = req.params
    const recipeRes = await recipesService.createRecipe(title, description, ingredients, instructions, tags, image, id)
    return res.status(recipeRes.status).json(recipeRes.msg)
  },
  getRecipes: async (req, res) => {
    const recipeRes = await recipesService.getRecipes()
    return res.status(recipeRes.status).json(recipeRes.msg)
  }
}
module.exports = recipesController