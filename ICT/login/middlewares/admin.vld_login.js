const bcrypt = require('bcrypt');
const staffs = require('../../models/model.staffs.js')
const users = require('../../models/model.users.js')

module.exports = async (req, res, next) => {
    const username = req.body.username
    const password = req.body.password
    const staff = await staffs.findOne({username : req.body.username})
    const user = await users.findOne({username : req.body.username})
    const err = {}

    if (username === '') {
        err.notification = 'Tên đăng nhập không được để trống !'
        res.render('./login/templates/admin.login.pug', {err})
        return
    }
    if (password === '') {
        err.notification = 'Mật khẩu không được để trống !'
        res.render('./login/templates/admin.login.pug', {err})
        return
    }
    if (!staff && !user ) {
        err.notification = 'Tài khoản không tồn tại'
        res.render('./login/templates/admin.login.pug', {err})
        return
    }
    if (staff) {
        if (!staff.staffstatus) {
            err.notification = 'Tài khoản của bạn không có quyền admin !'
            res.render('./login/templates/admin.login.pug', {err})
            return
        }
        const checkPassword = await bcrypt.compare(password, staff.password)
        if (checkPassword === false) {
            err.notification = 'Mật khẩu không chính xác !'
            res.render('./login/templates/admin.login.pug', {err})
            return
        }
    }
    if (user) {
        err.notification = 'Tài khoản của bạn không có quyền truy cập vào admin !'
        res.render('./login/templates/admin.login.pug', {err})
        return
    }

    res.locals.staff = staff
    next()
}