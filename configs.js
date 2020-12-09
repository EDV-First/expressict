module.exports = (app, express) => {
    const pug = require('pug')
    const bodyParser = require('body-parser')
    const mongoose = require('mongoose')

    mongoose.connect('mongodb://localhost/expressict', {useNewUrlParser: true, useUnifiedTopology: true});

    app.use(bodyParser.json()) // for parsing application/json
    app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

    app.set('view engine', 'pug')
    app.set('views', './ICT')

    app.use('/static', express.static('public'))
}

