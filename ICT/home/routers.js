const express = require('express')
const router = express.Router()

const home = require('./views/home.js')
const staffs = require('./views/staffs.js')
const user = require('./views/user.js')

router.get('/', home)
router.get('/staffs', staffs)
router.get('/profile/:id', user)

module.exports = router