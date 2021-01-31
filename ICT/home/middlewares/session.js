const shortid = require('shortid')
const User = require('../../models/model.users.js')

module.exports = async (req, res, next) => {
    if ( !req.signedCookies._session ) {
        res.cookie('_session', shortid.generate(), {signed: true})
    }
    if ( req.signedCookies._userId ) {
        const user = await User.findById(req.signedCookies._userId)
        res.locals.user = user
    }
    res.locals.anonymousid = req.signedCookies._session
    res.locals.url = req.originalUrl
    next()
}