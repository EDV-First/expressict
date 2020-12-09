const express = require('express')
const router = express.Router()

const index = require('./views/get/index.js')

router.get('/', index)



module.exports = router