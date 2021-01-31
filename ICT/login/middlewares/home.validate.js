const User = require("../../models/model.users.js")
const bcrypt = require("bcrypt")

module.exports = async (req, res, next) => {
    const username = req.body.username
    const password = req.body.password
    const values = req.body
    const user =  await User.findOne({username : req.body.username})
    let err

    if ( username === "" ) {
        err = "Tên đăng nhập không được để trống !"
        res.render('./login/templates/home.login.pug', {err, values})
        return
    }
    if ( password === "" ) {
        err = "Mật khẩu không được để trống !"
        res.render('./login/templates/home.login.pug', {err, values})
        return
    }
    if ( !user ) {
        err = "Tên đăng nhập không tồn tại !"
        res.render('./login/templates/home.login.pug', {err, values})
        return
    }
    const checkPassword = await bcrypt.compare(password, user.password)
    if ( !checkPassword ) {
        err = "Mật khẩu không chính xác !"
        res.render('./login/templates/home.login.pug', {err, values})
        return
    }

    res.cookie('_userId', user._id, {signed : true})
    res.locals.user = user
    // res.clearCookie('_session')
    next()
} 