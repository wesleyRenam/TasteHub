const User = require('../models/User')
const bcrypt = require('bcrypt')

const userService = {
  createUser: async (name, password, email) => {
    const salt = await bcrypt.genSalt(12)
    const passHash = await bcrypt.hash(password, salt)
  
    const user = new User({
      name,
      email,
      password: passHash,
    })
    try{
      await user.save()
      return {status: 200, msg: "Usuário cadastrado com sucesso"}
  
    } catch(error){
      console.log(error)
      return {status: 500, msg: "Aconteceu um erro com o db"}
    }
  }
}

module.exports = userService