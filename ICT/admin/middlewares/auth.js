const staff = require('../../models/model.staffs.js')

module.exports = async (req, res, next) => {
    if (!req.signedCookies._id) {
        res.redirect('/login/admin')
        return
    }
    const checkStaff = await staff.findById(req.signedCookies._id)

    if (!checkStaff) {
        res.redirect('/login/admin')
        return
    }
    if (checkStaff.staffstatus === false) {
        res.redirect('/login/admin')
        return
    }

    res.locals.staff = checkStaff

    next()
}