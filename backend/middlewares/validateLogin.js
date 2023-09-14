const User = require('../models/User')
const bcrypt = require('bcrypt')

const validateRegister = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email })
  // const regexPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])(?:([0-9a-zA-Z$*&@#])(?!\1)){8,}$/;
  // if (!regexPass.test(password)) {
  //   return res.status(422).json({ message: 'A senha tem que ter no mínimo 1 caractere especial, 1 número, 1 letra maiscula e 1 minuscula, a senha deve ter no minimo 8 caracteres' });
  // }

  if (!email || !password) {
    return res.status(422).json({ message: 'Todos os campos são obrigatorios' });
  }

  if(!user) {
    return res.status(404).json({ message: 'Usuario não encontrado' });
  }
  
  const checkPass = await bcrypt.compare(password, user.password)

  if(!checkPass) {
    return res.status(422).json({ message: 'Senha invalida' });
  }

  next();
};

module.exports = validateRegister;