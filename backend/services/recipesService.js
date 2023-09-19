const Recipes = require('../models/Recipes')

const recipesService = {
  createRecipe: async (title, description, ingredients, instructions, tags, image, id) => {
    const recipe = new Recipes({
      title,
      description,
      ingredients,
      instructions,
      tags,
      image,
      author: id,
    })
    try{
      await recipe.save()
      return {status: 200, msg: "Receita cadastrada com sucesso"}
  
    } catch(error){
      console.log(error)
      return {status: 500, msg: "Aconteceu um erro com o db"}
    }
  },
 getRecipes: async () => {
  try {
    const receitas = await Recipes.find({});
    return {status: 200, msg: receitas}
  } catch (err) {
    console.log(err)
    return {status: 500, msg: "Erro ao buscar receitas"}
  }
 }
}

module.exports = recipesService