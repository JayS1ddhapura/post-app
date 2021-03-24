const express = require('express')
const controller = require('../controllers/user-controller')

const router = new express.Router()

router.post('/signup', controller.signup)
router.post('/login', controller.login)

module.exports = router