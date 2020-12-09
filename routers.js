module.exports = (app) => {
    const admin_router = require('./ICT/admin/routers.js')

    app.use('/admin', admin_router)
}