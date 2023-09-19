const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, 
  },
  description: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [String],
    required: true,
  },
  instructions: {
    type: [String],
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Isso cria um relacionamento com a coleção de Usuários
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now, // Define a data de criação automaticamente
  },
  updatedAt: {
    type: Date,
    default: Date.now, // Define a data de atualização automaticamente
  },
  tags: {
    type: [String], // Supondo que as tags sejam armazenadas como um array de strings
  },
  image: {
    type: String, // Supondo que o caminho da imagem seja uma string
  },
});

const Recipes = mongoose.model('Recipe', recipeSchema);

module.exports = Recipes;
