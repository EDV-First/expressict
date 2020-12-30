module.exports = (app) => {
    const admin_router = require('./ICT/admin/routers.js')
    const login = require('./ICT/login/routers.js')
    const api_router = require('./ICT/api/routers.js')
    const auth = require('./ICT/admin/middlewares/auth.js')

    app.use('/admin', auth, admin_router)
    app.use('/login', login)
    app.use('/api', api_router)
}