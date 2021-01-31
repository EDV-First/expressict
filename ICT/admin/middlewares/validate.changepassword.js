const bcrypt = require('bcrypt')
const Staff = require('../../models/model.staffs.js')

module.exports = async (req, res, next) => {
    const oldPass = req.body.oldpassword
    const newPass = req.body.newpassword
    const passConfirmation = req.body.passwordconfirmation
    let err = ""
    const thisStaff = await Staff.findById(req.params.id)
    const values = req.body

    if ( oldPass === "" || newPass === "" || passConfirmation === "" ) {
        err = "Các trường không được để trống !"
        res.render('./admin/templates/staffs/staff.changepassword.pug', {err, values})
        return
    }

    const result = await bcrypt.compare(oldPass, thisStaff.password)

    if ( !result ) {
        err = "Mật khẩu cũ không đúng !"
        res.render('./admin/templates/staffs/staff.changepassword.pug', {err, values})
        return
    }
    if ( newPass.length < 8 ) {
        err = "Mật khẩu không được ít hơn 8 kí tự !"
        res.render('./admin/templates/staffs/staff.changepassword.pug', {err, values})
        return
    }
    if ( newPass !== passConfirmation ) {
        err = "Mật khẩu nhập lại không khớp !"
        res.render('./admin/templates/staffs/staff.changepassword.pug', {err, values})
        return
    }

    const salt = await bcrypt.genSalt(10)
    const password = await bcrypt.hash(newPass, salt)
    await Staff.updateOne({_id : req.params.id}, {password : password})
    
    next()
}