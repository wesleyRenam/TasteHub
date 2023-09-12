const User = require('../models/User')

const validateRegister = async (req, res, next) => {
  const { email, password, confirmpassword, name } = req.body;
  const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
  const regexPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])(?:([0-9a-zA-Z$*&@#])(?!\1)){8,}$/;

  const userExists = await User.findOne({ email: email })

  if(userExists) {
    return res.status(422).json({ message: 'Email já cadastrado' });
  }
  if (!email || !password || !name || !confirmpassword) {
    return res.status(422).json({ message: 'Todos os campos são obrigatorios' });
  }
  if (password != confirmpassword) {
    return res.status(422).json({ message: 'As senhas devem ser iguais' });
  }
  if(password.length < 6) {
    return res.status(422).json({ message: "A senha tem que ter no mínimo 6 caracteres"})
  }
  // if (!regexPass.test(password)) {
  //   return res.status(422).json({ message: 'A senha tem que ter no mínimo 1 caractere especial, 1 número, 1 letra maiscula e 1 minuscula, a senha deve ter no minimo 8 caracteres' });
  // }

  if(!regex.test(email)) {
    return res.status(422).json({ message: 'Coloque um email válido' });
  }
  next();
};

module.exports = validateRegister;