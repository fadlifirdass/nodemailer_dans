const express = require('express')
const sendEmail = require('../controllers/emailController')
const router = express.Router()


router.get('/email',sendEmail)



module.exports = router;