module.exports = (app) => {
    const adminRouter = require('./ICT/admin/routers.js')
    const loginRouter = require('./ICT/login/routers.js')
    const apiRouter = require('./ICT/api/routers.js')
    const auth = require('./ICT/admin/middlewares/auth.js')

    app.use('/admin', auth, adminRouter)
    app.use('/login', loginRouter)
    app.use('/api', apiRouter)
}