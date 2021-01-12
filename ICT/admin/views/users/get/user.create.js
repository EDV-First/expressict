module.exports = (req, res) => {
    const title = "Thêm người dùng" 
    res.render('./admin/templates/users/user.create.pug', {title})
}