const Recipes = require('../models/Recipes');

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
    });
    try {
      await recipe.save();
      return { status: 200, msg: "Receita cadastrada com sucesso" };
    } catch (error) {
      console.log(error);
      return { status: 500, msg: "Aconteceu um erro com o db" };
    }
  },
  getRecipes: async () => {
    try {
      const receitas = await Recipes.find({});
      return { status: 200, msg: receitas };
    } catch (err) {
      console.log(err);
      return { status: 500, msg: "Erro ao buscar receitas" };
    }
  },
  getById: async (id) => {
    try {
      const receita = await Recipes.findById({ _id: id });
      return { status: 200, msg: receita };
    } catch (err) {
      console.log(err);
      return { status: 500, msg: "Erro ao buscar receitas" };
    }
  },
  getMyRecipes: async (userId) => {
    try {
      const receitas = await Recipes.find({ author: userId });
      return { status: 200, msg: receitas };
    } catch (err) {
      console.log(err);
      return { status: 500, msg: "Erro ao buscar receitas" };
    }
  },
  deleteRecipe: async (id) => {
    try {
      await Recipes.deleteOne({ _id: id });
      return { status: 204, msg: "Deletado com sucesso" };
    } catch (err) {
      console.log(err);
      return { status: 500, msg: "Erro ao deletar receitas" };
    }
  },
  updateRecipe: async (updatedRecipe, id) => {
    try {
      const recipe = await Recipes.findOneAndUpdate({ _id: id }, updatedRecipe);
      if (!recipe) return { status: 404, msg: 'Receita não encontrada' };
      return { status: 200, msg: 'Update com sucesso' };
    } catch (err) {
      console.log(err);
      return { status: 500, msg: "Erro ao atualizar receitas" };
    }
  }
};

module.exports = recipesService;
