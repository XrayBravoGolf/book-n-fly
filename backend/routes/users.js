const express = require('express')
const bodyParserjson = require('body-parser').json
const { login, verifyToken } = require('../controllers/users')

const router = express.Router()

router.post('/login', bodyParserjson(), login)

module.exports = router
