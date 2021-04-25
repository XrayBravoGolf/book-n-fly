const { generateToken } = require('../util/auth')
const { queryDB } = require('../util/db')

const login = async (req, res) => {
  const { email, password } = req.body
  const query = 'SELECT * FROM users WHERE email = $1'
  try {
    const queryResult = await queryDB(query, [email])
    const userinfo = queryResult.rows[0]

    if (!userinfo) {
      res.status(404).send({ message: 'No user with that email' })
      return
    }
    if (userinfo.password !== password) {
      res.status(400).send({ message: 'Password inconsistent with server records' })
      return
    }
    const token = generateToken(userinfo.email)
    const msg = { email: userinfo.email, Authorization: token }
    res.status(200).send(msg)
    return
  } catch (error) {
    res.status(500).send({ message: 'Server error during query' })
    console.log(error)
  }
}
module.exports = {
  login
}
