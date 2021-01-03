const express = require('express')
const router = express.Router()

const index = require('./views/index.js')
// users get
const users = require('./views/users/get/users.js')
const user_view = require('./views/users/get/user.view.js')
const user_create = require('./views/users/get/user.create.js')

// user post
const user_update = require('./views/users/post/user.update.js')
const user_create_post = require('./views/users/post/user.create.js')

// staffs get
const staffs_list = require("./views/staffs/get/staffs.list.js")
const staffs_ranking = require("./views/staffs/get/staffs.ranking.js")
const staffs_title = require("./views/staffs/get/staffs.title.js")
const staff_view = require("./views/staffs/get/staff.view.js")
const staff_create = require("./views/staffs/get/staff.create.js")

// staffs post
const staff_create_post = require('./views/staffs/post/staff.create.js')
const staff_update = require("./views/staffs/post/staff.update.js")

// middlewares
const breadcrumb = require('./middlewares/breadcrumb.js')
const validate_create = require('./middlewares/validate.create.js')
const staff_validate_update = require('./middlewares/validate.staff.update.js')



// users
router.get('/', index)
router.get('/users', breadcrumb, users)
router.get('/users/create', breadcrumb, user_create)
router.get('/users/:id', breadcrumb, user_view)

router.post('/users/create', breadcrumb, validate_create, user_create_post)
router.post('/users/:id', user_update)

// staffs
router.get('/staffs/list', breadcrumb, staffs_list)
router.get('/staffs/ranking', breadcrumb, staffs_ranking)
router.get('/staffs/title', breadcrumb, staffs_title)
router.get('/staffs/create', breadcrumb, staff_create)
router.get('/staffs/:id', breadcrumb, staff_view)

router.post('/staffs/create', breadcrumb, validate_create, staff_create_post)
router.post('/staffs/:id', breadcrumb, staff_validate_update, breadcrumb, staff_update)


module.exports = router