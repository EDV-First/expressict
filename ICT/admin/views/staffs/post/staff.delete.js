const Staff = require("../../../../models/model.staffs")

module.exports = async (req, res) => {
    const arrId = Object.keys(req.body)
    await Staff.deleteMany({_id : {$in : arrId}})
    res.redirect('/admin/staffs')
}