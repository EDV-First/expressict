const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: String,
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    gender: String,
    dayofbirth: Date,
    staffstatus: Boolean 
})

// const User = mongoose.model('name Model', schema, 'name collection')
const User = mongoose.model("User", userSchema, "users")

module.exports = User