const staffs = require('../../../../models/model.staffs.js') 

module.exports = async (req, res) => {
    const staff = await staffs.findById(req.params.id)
    res.render('./admin/templates/staffs/staff.view.pug', {staff})
}