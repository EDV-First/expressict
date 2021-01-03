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
const admin_login = require('./views/get/admin.login.js')
const admin_logout = require('./views/get/admin.logout.js')
// post
const post_admin_login = require('./views/post/admin.login.js')
// middlewares
const adminVldLogin = require('./middlewares/admin.vld_login.js')


router.get('/admin', csrfProtection, admin_login)
router.get('/logout', admin_logout)

router.post('/admin', adminVldLogin, parseForm, csrfProtection, post_admin_login)


module.exports = router