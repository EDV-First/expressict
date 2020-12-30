const express = require('express')
const router = express.Router()

// view 
const admin_login = require('./views/get/admin.login.js')
const admin_logout = require('./views/get/admin.logout.js')

const post_admin_login = require('./views/post/admin.login.js')


// middlewares
const adminVldLogin = require('./middlewares/admin.vld_login.js')


// get
router.get('/admin', admin_login)
router.get('/logout', admin_logout)


// post
router.post('/admin', adminVldLogin, post_admin_login)


module.exports = router