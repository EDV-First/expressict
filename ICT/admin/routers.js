const express = require('express')
const router = express.Router()
const multer = require('multer')
const upload = multer({ dest: 'public/uploads/' })

const index = require('./views/index.js')
// users get
const users = require('./views/users/get/users.js')
const userView = require('./views/users/get/user.view.js')
const userCreate = require('./views/users/get/user.create.js')
// user post
const userDelete = require('./views/users/post/user.delete.js')
const userUpdate = require('./views/users/post/user.update.js')
const userCreatePost = require('./views/users/post/user.create.js')
// staffs get
const staffs = require("./views/staffs/get/staffs.js")
const staffsRanking = require("./views/staffs/get/staffs.ranking.js")
const staffsTitle = require("./views/staffs/get/staffs.title.js")
const staffView = require("./views/staffs/get/staff.view.js")
const staffCreate = require("./views/staffs/get/staff.create.js")
const staffChangePassword = require("./views/staffs/get/staff.changepassword.js")
// staffs post
const staffCreatePost = require('./views/staffs/post/staff.create.js')
const staffUpdate = require("./views/staffs/post/staff.update.js")
const staffDelete = require("./views/staffs/post/staff.delete.js")
const staffChangePasswordPost = require("./views/staffs/post/staff.changepassword.js")
// middlewares
const breadcrumb = require('./middlewares/breadcrumb.js')
const validateCreate = require('./middlewares/validate.create.js')
const staffValidateUpdate = require('./middlewares/validate.staff.update.js')
const staffValidateChangePassword = require('./middlewares/validate.changepassword.js')
const authChangePassword = require('./middlewares/auth.changepassword.js')


// users
router.get('/', breadcrumb, index)
router.get('/users', breadcrumb, users)
router.get('/users/create', breadcrumb, userCreate)
router.get('/users/:id', breadcrumb, userView)

router.post('/users', userDelete)
router.post('/users/create', breadcrumb, validateCreate, userCreatePost)
router.post('/users/:id', userUpdate)

// staffs
router.get('/staffs', breadcrumb, staffs)
router.get('/staffs/ranking', breadcrumb, staffsRanking)
router.get('/staffs/title', breadcrumb, staffsTitle)
router.get('/staffs/create', breadcrumb, staffCreate)
router.get('/staffs/:id/change_password', breadcrumb, authChangePassword, staffChangePassword)
router.get('/staffs/:id', breadcrumb, staffView)

router.post('/staffs', staffDelete)
router.post('/staffs/create', breadcrumb, validateCreate, staffCreatePost)
router.post('/staffs/:id/change_password', breadcrumb, staffValidateChangePassword, staffChangePasswordPost)
router.post('/staffs/:id', upload.single('avatar'), breadcrumb, staffValidateUpdate, staffUpdate)


module.exports = router