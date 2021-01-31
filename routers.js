module.exports = (app) => {
    // url
    const admin = require('./ICT/admin/routers.js')
    const login = require('./ICT/login/routers.js')
    const api = require('./ICT/api/routers.js')
    const home = require('./ICT/home/routers.js')
    // middlewares
    const auth = require('./ICT/admin/middlewares/auth.js')
    const session = require('./ICT/home/middlewares/session.js')

    app.use(session)
    app.use('/admin', auth, admin)
    app.use('/login', login)
    app.use('/api', api)
    app.use('/', home)
}