const Staff = require("../../models/model.staffs.js")

module.exports = async (req, res, next) => {
    const staff = await Staff.findById(req.params.id)
    const someStaff = await Staff.findOne({username : req.body.username})
    const values = req.body
    let err;

    req.body.username = req.body.username.trim()

    if (req.body.username.indexOf(" ") !== -1) {
        err = 'Tên tài khoản không được có khoảng trắng !'
        res.render('./admin/templates/staffs/staff.view.pug', {err, staff, values})
        return
    }
    if (req.body.username === "") {
        err = 'Tên tài khoản không được để trống !'
        res.render('./admin/templates/staffs/staff.view.pug', {err, staff, values})
        return
    }
    if (someStaff) {
        if (req.body.username == someStaff.username && req.body._id != someStaff._id) {
            err = 'Tên tài khoản đã được sử dụng !'
            res.render('./admin/templates/staffs/staff.view.pug', {err, staff, values})
            return
        }
    }
    if (req.body.fullname === "") {
        err = 'Tên không được để trống !'
        res.render('./admin/templates/staffs/staff.view.pug', {err, staff, values})
        return
    }

    let fullName = req.body.fullname.trim()
    while (fullName.indexOf("  ") !== -1) {
        fullName = fullName.replace("  ", " ")
    }
    req.body.fullname = fullName.split(" ")
                        .map(x => `${x[0].toUpperCase()}${x.slice(1)}`)
                        .join(" ")

    if (req.body.phone === "") {
        err = 'Số điện thoại không được để trống !'
        res.render('./admin/templates/staffs/staff.view.pug', {err, staff, values})
        return
    }
    if (req.body.phone[0] != 0) {
        err = 'Số điện thoại không hợp lệ !'
        res.render('./admin/templates/staffs/staff.view.pug', {err, staff, values})
        return
    }

    next()
}