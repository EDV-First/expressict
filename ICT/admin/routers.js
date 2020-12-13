const express = require('express')
const router = express.Router()

const index = require('./views/get/admin.index.js')
const users = require('./views/get/admin.users.js')
const user_view = require('./views/get/user.view.js')
const user_create = require('./views/get/user.create.js')


router.get('/', index)
router.get('/users', users)
router.get('/users/create', user_create)
router.get('/users/:id', user_view)





module.exports = router