const User = require('../models/User')
const bcrypt = require('bcrypt')
const { signToken } = require('../utils')

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
  },
  userLogin: async(email) => {
    const user = await User.findOne({ email: email })
    try{
      const secret = process.env.SECRET 
      const token = await signToken(user.id, secret)
      return {msg: token, status: 200}
  
    } catch(error){
      console.log(error)
      return {status: 500, msg: "Aconteceu um erro com o db"}
    }
  },
  user: async(id) => {
    try {
      const user = await User.findById({ id: id }, '-password')
      return {status:200, msg: user}
    } catch(error){
      console.log(error)
      return {status: 500, msg: "Aconteceu um erro com o db"}
    }
  },

  getAllUsers: async() => {
    try {
      const users = await User.find({});
      return { status: 200, msg: users };
    } catch (err) {
      console.log(err);
      return { status: 500, msg: "Erro ao buscar os usuarios" };
    }
  }
}

module.exports = userService