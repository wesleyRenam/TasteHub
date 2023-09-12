const jwt = require('jsonwebtoken')

const signToken = async (payload, secret) => jwt.sign(payload, secret)

// const decodedToken = async() => jwt

module.exports = {signToken}