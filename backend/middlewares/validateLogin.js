const User = require('../models/User')
const bcrypt = require('bcrypt')

const validateRegister = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email })

  const checkPass = await bcypt.compare(password, user.password)

  if (!email || !password) {
    return res.status(422).json({ message: 'Todos os campos são obrigatorios' });
  }

  if(!user) {
    return res.status(404).json({ message: 'Usuario não encontrado' });
  }

  if(checkPass) {
    return res.status(422).json({ message: 'Senha invalida' });
  }

  next();
};

module.exports = validateRegister;