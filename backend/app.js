require('dotenv').config()
const express = require('express')
const mongoose = require ('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const validateRegister = require('./middlewares/loginRegister')
const User = require('./models/User')

const app = express()
app.use(express.json());
// Rotas
app.get('/', (req, res) => {
  res.status(200).json({message:"Tudo certo!"})
})
app.post('/auth/register',validateRegister, async (req, res) => {
  const {name, password, confirmpassword, email} = req.body

  const salt = await bcrypt.genSalt(12)
  const passHash = await bcrypt.hash(password, salt)

  const user = new User({
    name,
    email,
    password,
  })


  try{

    await user.save()
    res.status(200).json({message: "User cadastrado com sucesso"})

  } catch(error){
    console.log(error)
    res.status(500).json({message: "Aconteceu um erro com o servidor!"})
  }

})

// Credenciais
const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS

// URI MongoAtlas
const URI = `mongodb+srv://${dbUser}:${dbPass}@cluster0.5ghoxe6.mongodb.net/?retryWrites=true&w=majority`

// Conection
mongoose.connect(URI).then(() => {
  app.listen(3000)
  console.log('conectado com sucesso ao DB')
}).catch((err) => console.log(err))