module.exports = (app) => {
    const admin_router = require('./ICT/admin/routers.js')
    const api_router = require('./ICT/api/routers.js')

    app.use('/admin', admin_router)
    app.use('/api', api_router)
}