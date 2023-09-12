require('dotenv').config()
const express = require('express')
const mongoose = require ('mongoose')
const jwt = require('jsonwebtoken')
const userRoute = require('./routes/userRoute');

const app = express()
app.use(express.json());

// Rotas
app.get('/', (req, res) => {
  res.status(200).json({message:"Tudo certo!"})
})
app.use('/auth', userRoute)

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