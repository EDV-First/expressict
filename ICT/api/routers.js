const express = require('express')
const router = express.Router()

const users = require('./views/get/api.users.js')
const staffs = require('./views/get/api.staffs.js')


router.get('/users', users)
router.get('/staffs', staffs)




module.exports = router