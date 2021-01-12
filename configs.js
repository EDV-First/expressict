module.exports = (app, express) => {
    require('dotenv').config()
    const pug = require('pug')
    const bodyParser = require('body-parser')
    const mongoose = require('mongoose')
    const cookieParser = require('cookie-parser')
    // connect to mongodb
    mongoose.connect('mongodb://localhost/expressict', {useNewUrlParser: true, useUnifiedTopology: true});

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(cookieParser(process.env.COOKIE))
    app.use('/static', express.static('public'))

    app.set('view engine', 'pug')
    app.set('views', './ICT')
}
    

