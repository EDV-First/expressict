const express = require('express')
const router = express.Router()

const cookieParser = require('cookie-parser')
const csrf = require('csurf')
const bodyParser = require('body-parser')

var csrfProtection = csrf({ cookie: true })
var parseForm = bodyParser.urlencoded({ extended: true })

const app = express()
app.use(cookieParser())

const logOut = require('./views/logout.js')
// get
const homeLogin = require('./views/home/get/home.login.js')
const adminLogin = require('./views/admin/get/admin.login.js')
// post
const adminLoginPost = require('./views/admin/post/admin.login.js')
const homeLoginPost = require('./views/home/post/home.login.js')
// middlewares
const adminVldLogin = require('./middlewares/admin.validate.js')
const homeVldLogin = require('./middlewares/home.validate.js')


router.get('/', homeLogin)
router.get('/admin', csrfProtection, adminLogin)
router.get('/logout', logOut)

router.post('/', homeVldLogin, homeLoginPost)
router.post('/admin', adminVldLogin, parseForm, csrfProtection, adminLoginPost)


module.exports = router