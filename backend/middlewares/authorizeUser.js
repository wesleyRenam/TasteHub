const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authorizeUser = async (req, res, next) => {
  const token = req.headers.authorization;
  const { id } = req.params
  const user = await User.findById({ id: id }, '-password')
  try {
    const decodedToken = jwt.verify(token, process.env.SECRET);
    console.log(decodedToken) 

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = authorizeUser;
