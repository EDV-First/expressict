const Staff = require("../../models/model.staffs.js")
const User = require("../../models/model.users.js")

module.exports = async (req, res, next) => {
    const user = await User.findById(req.params.id)
    const staff = await Staff.findById(req.params.id)
    const thisStaff = res.locals.thisStaff

    if ( user || String(staff._id) !== String(thisStaff._id) ) {
        res.status(404).end()
        return
    }
    next()
}