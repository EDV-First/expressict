const bcrypt = require('bcrypt');
const Staffs = require('../../models/model.staffs.js')
const Users = require('../../models/model.users.js')

module.exports = async (req, res, next) => {
    const username = req.body.username
    const password = req.body.password
    const csrfToken = req.body._csrf
    const staff = await Staffs.findOne({username : req.body.username})
    const user = await Users.findOne({username : req.body.username})
    let err
    

    if (username === '') {
        err = 'Tên đăng nhập không được để trống !'
        res.render('./login/templates/admin.login.pug', {err, csrfToken})
        return
    }
    if (password === '') {
        err = 'Mật khẩu không được để trống !'
        res.render('./login/templates/admin.login.pug', {err, csrfToken})
        return
    }
    if (!staff && !user ) {
        err = 'Tài khoản không tồn tại'
        res.render('./login/templates/admin.login.pug', {err, csrfToken})
        return
    }
    if (staff) {
        if (!staff.staffstatus) {
            err = 'Tài khoản của bạn không có quyền admin !'
            res.render('./login/templates/admin.login.pug', {err, csrfToken})
            return
        }
        const checkPassword = await bcrypt.compare(password, staff.password)
        if (checkPassword === false) {
            err = 'Mật khẩu không chính xác !'
            res.render('./login/templates/admin.login.pug', {err, csrfToken})
            return
        }
    }
    if (user) {
        err = 'Tài khoản của bạn không có quyền truy cập vào admin !'
        res.render('./login/templates/admin.login.pug', {err, csrfToken})
        return
    }

    res.locals.staff = staff
    next()
}