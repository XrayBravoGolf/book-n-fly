const jwt = require('jsonwebtoken')
require('dotenv').config()

function generateToken (email) {
  const token = jwt.sign(
    { email },
    process.env.SECRET, { expiresIn: '3d' }
  )
  return token
}
function verifyAuth () {
  // TODO
}

module.exports = {
  generateToken,
  verifyAuth
}
