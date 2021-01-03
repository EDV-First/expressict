const Staff = require("../../../../models/model.staffs.js")

module.exports = async (req, res) => {
    req.body.staffstatus ? req.body.staffstatus = true : req.body.staffstatus = false  
    await Staff.updateOne({_id : req.params.id}, req.body)

    res.redirect('/admin/staffs/list')
}