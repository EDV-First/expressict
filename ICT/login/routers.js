const express = require('express')
const router = express.Router()

const cookieParser = require('cookie-parser')
const csrf = require('csurf')
const bodyParser = require('body-parser')

var csrfProtection = csrf({ cookie: true })
var parseForm = bodyParser.urlencoded({ extended: true })

const app = express()
app.use(cookieParser())

// get
const adminLogin = require('./views/admin/get/admin.login.js')
const adminLogout = require('./views/admin/get/admin.logout.js')
// post
const adminLoginPost = require('./views/admin/post/admin.login.js')
// middlewares
const adminVldLogin = require('./middlewares/admin.vld_login.js')

router.get('/admin', csrfProtection, adminLogin)
router.get('/logout', adminLogout)

router.post('/admin', adminVldLogin, parseForm, csrfProtection, adminLoginPost)


module.exports = router