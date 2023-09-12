const userService = require('../services/userService')

const userController = {
  createUser: async (req, res) =>{
    const {name, password, email} = req.body
    const userResponse = await userService.createUser(name, password, email)
    return res.status(userResponse.status).json(userResponse.msg)
  },
  userLogin: async(req, res) => {
    const { email } = req.body
    const loginResponse = await userService.userLogin(email)
    return res.status(loginResponse.status).json(loginResponse.msg)
  }
}
module.exports = userController