const mongoose = require('mongoose')

const staffSchema = new mongoose.Schema({
    username: String,
    fullname: String,
    email: String,
    password: String,
    gender: String,
    phone: String,
    dayofbirth: String,
    staffstatus: Boolean,
    ranking: Number
})

// const User = mongoose.model('name Model', schema, 'name collection')
const Staff = mongoose.model("Staff", staffSchema, "staffs")

module.exports = Staff