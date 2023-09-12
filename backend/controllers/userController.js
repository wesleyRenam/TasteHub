const userService = require('../services/userService')

const userController = {
  createUser: async (req, res) =>{
    const {name, password, email} = req.body
    const userResponse = await userService.createUser(name, password, email)
    return res.status(userResponse.status).json(userResponse.msg)
  }
}

module.exports = userController