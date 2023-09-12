const userModel = require('../models/User')

const validateRegister = async (req, res, next) => {
  const { email, password, confirmpassword, name } = req.body;
  const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

  const emailExists = userModel.findOne({ email: email })
  console.log(emailExists)

  if (!email || !password || !name || !confirmpassword) {
    return res.status(422).json({ message: 'Todos os campos são obrigatorios' });
  }
  if (password != confirmpassword) {
    return res.status(422).json({ message: 'As senhas devem ser iguais' });
  }
  if(!regex.test(email)) {
    return res.status(422).json({ message: 'Coloque um email valido' });
  }
  if(!emailExists) {
    return res.status(422).json({ message: 'Email já cadastrado' });
  }
  next();
};

module.exports = validateRegister;