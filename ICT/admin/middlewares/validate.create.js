const Users = require('../../models/model.users.js') 

module.exports = async (req, res, next) => {
    const user = await Users.findOne({username : req.body.username})
    let err

    if ( req.body.username === "" ) {
        err = "Tên đăng nhập không được để trống !"
        res.render("./admin/templates/create.pug", {err})
        return
    }
    if ( req.body.password === "" || req.body.passwordconfirmation === "" ) {
        err = "Mật khẩu không được để trống !"
        res.render("./admin/templates/create.pug", {err})
        return
    }
    if ( user ) {
        err = "Tên đăng nhập đã được sử dụng !"
        res.render("./admin/templates/create.pug", {err})
        return
    }
    if ( req.body.password.length < 8 ) {
        err = "Mật khẩu phải chứa ít nhất 8 kí tự !"
        res.render("./admin/templates/create.pug", {err})
        return
    }
    if ( !isNaN(req.body.password) ) {
        err = "Mật khẩu không được hoàn toàn bằng số !"
        res.render("./admin/templates/create.pug", {err})
        return
    }
    if ( req.body.password !== req.body.passwordconfirmation ) {
        err = "Xác nhận mật khẩu không chính xác !"
        res.render("./admin/templates/create.pug", {err})
        return
    }

    next()
}