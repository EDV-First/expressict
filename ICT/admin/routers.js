const express = require('express')
const router = express.Router()

// users get
const index = require('./views/get/users/index.js')
const users = require('./views/get/users/users.js')
const user_view = require('./views/get/users/user.view.js')
const user_create = require('./views/get/users/user.create.js')

// user post
const user_update = require('./views/post/user.update.js')
const user_post_create = require('./views/post/user.create.js')

// staffs get
const staffs_list = require("./views/get/staffs/staffs.list.js")
const staffs_ranking = require("./views/get/staffs/staffs.ranking.js")
const staffs_title = require("./views/get/staffs/staffs.title.js")
const staff_view = require("./views/get/staffs/staff.view.js")

// middlewares
const breadcrumb = require('./middlewares/breadcrumb.js')
const validate_create = require('./middlewares/validate.create.js')



// users
router.get('/', breadcrumb, index)
router.get('/users', breadcrumb, users)
router.get('/users/create', breadcrumb, user_create)
router.get('/users/:id', breadcrumb, user_view)

router.post('/users/create', breadcrumb, validate_create, user_post_create)
router.post('/users/:id', user_update)

// staffs
router.get('/staffs/list', breadcrumb, staffs_list)
router.get('/staffs/ranking', breadcrumb, staffs_ranking)
router.get('/staffs/title', breadcrumb, staffs_title)
router.get('/staffs/:id', breadcrumb, staff_view)


module.exports = router