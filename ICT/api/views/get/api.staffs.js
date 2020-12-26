const staffs = require("../../../models/model.staffs.js") 

module.exports = async (req, res) => {
    const staff = await staffs.find()
    res.json(staff)
}