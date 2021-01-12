const Staff = require('../../models/model.staffs.js')

module.exports = async (req, res, next) => {
    const checkStaff = await Staff.findById(req.signedCookies._id)

    if (!req.signedCookies._id) {
        res.redirect('/login/admin')
        return
    }
    if (!checkStaff) {
        res.redirect('/login/admin')
        return
    }
    if (!checkStaff.staffstatus) {
        res.redirect('/login/admin')
        return
    }

    res.locals.thisStaff = checkStaff
    
    next()
}