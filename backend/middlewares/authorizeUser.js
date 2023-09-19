const jwt = require('jsonwebtoken');

const authorizeUser = async (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  try {
    const decodedToken = jwt.verify(token, process.env.SECRET)
    const {id} = req.params
    if(decodedToken !== id) return res.status(402).json({message: 'Unauthorized user'})
    next()
  } catch (error) {
    console.log(error)
    return res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = authorizeUser;
