const express = require('express');
const { login, verifyToken } = require('../controllers/users');
const multer = require('multer');
upload = multer()

const router = express.Router();

router.post('/login',upload.none(), login);

module.exports = router