const users = require('../../models/model.users.js') 

module.exports = async (req, res, next) => {
    const user = await users.findOne({username : req.body.username})
    const errs = {}
    if (req.body.username === "") {
        errs.notification = "Tên đăng nhập không được để trống !"
        res.render("./admin/templates/users/user.create.pug", {errs})
        return
    }
    if (req.body.password === "" || req.body.passwordconfirmation === "") {
        errs.notification = "Mật khẩu không được để trống !"
        res.render("./admin/templates/users/user.create.pug", {errs})
        return
    }
    if (user) {
        errs.notification = "Tên đăng nhập đã được sử dụng !"
        res.render("./admin/templates/users/user.create.pug", {errs})
        return
    }
    if (req.body.password.length < 8) {
        errs.notification = "Mật khẩu phải chứa ít nhất 8 kí tự !"
        res.render("./admin/templates/users/user.create.pug", {errs})
        return
    }
    if (!isNaN(req.body.password)) {
        errs.notification = "Mật khẩu không được hoàn toàn bằng số !"
        res.render("./admin/templates/users/user.create.pug", {errs})
        return
    }
    if (req.body.password !== req.body.passwordconfirmation) {
        errs.notification = "Xác nhận mật khẩu không chính xác !"
        res.render("./admin/templates/users/user.create.pug", {errs})
        return
    }

    next()
}