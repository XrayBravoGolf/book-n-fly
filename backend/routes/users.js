const express = require('express')
const multer = require('multer')
const { login, verifyToken } = require('../controllers/users')

const upload = multer()

const router = express.Router()

router.post('/login', upload.none(), login)

module.exports = router
