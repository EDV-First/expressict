const mongoose = require('mongoose')

const posterSchema = new mongoose.Schema({
    title: String,
    images: String,
    comments: {default : 0, body : String},
    
    datecreated: String
})

// const User = mongoose.model('name Model', schema, 'name collection')
const Poster = mongoose.model("Poster", posterSchema, "poster")

module.exports = Poster