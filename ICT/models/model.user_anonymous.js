const mongoose = require('mongoose')

const userAnonymousSchema = new mongoose.Schema({
    session : String
})

// const User = mongoose.model('name Model', schema, 'name collection')
const Anonymous = mongoose.model("Anonymous", userAnonymousSchema, "anonymous")

module.exports = Anonymous