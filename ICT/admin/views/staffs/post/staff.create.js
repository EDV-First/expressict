const Staffs = require('../../../../models/model.staffs.js') 
const bcrypt = require('bcrypt')

module.exports = async (req, res) => {
    const saltRounds = 10
    salt = await bcrypt.genSalt(saltRounds)
    hash = await bcrypt.hash(req.body.password, salt) 
    req.body.password = hash
    await Staffs.create(req.body)
    // const staffs = await Staffs.find()
    // const notification = "Tài khoản đã được tạo thành công"
    // res.render("./admin/templates/staffs/staffs.pug", {notification, staffs})
    res.redirect("/admin/staffs")
}