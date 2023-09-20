const jwt = require('jsonwebtoken');

const authorizeUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    if(!token) return res.status(402).json({message: 'Unauthorized user'})
    const decodedToken = jwt.verify(token, process.env.SECRET)
    req.authorId = decodedToken
    next()
  } catch (error) {
    console.log(error)
    return res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = authorizeUser;
