const express = require('express')
const router = express.Router()

const users = require('./views/get/api.users.js')


router.get('/users', users)




module.exports = router