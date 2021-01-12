module.exports = (req, res) => {
    const title = "Thêm nhân viên" 
    res.render('./admin/templates/users/user.create.pug', {title})
}