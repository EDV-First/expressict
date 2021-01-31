module.exports = (req, res) => {
    const title = "Thêm người dùng" 
    res.render('./admin/templates/create.pug', {title})
}