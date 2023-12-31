const jwt = require('jsonwebtoken');
const Recipes = require('../models/Recipes');

const authorizeUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.SECRET)
    const {id} = req.params
    const recipe = await Recipes.findOne({ _id: id })
    const authorId = recipe.author.toString()
    if(decodedToken !== authorId) return res.status(402).json({message: 'Unauthorized user'})
    req.authorId = authorId;
    next()
  } catch (error) {
    console.log(error)
    return res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = authorizeUser;
