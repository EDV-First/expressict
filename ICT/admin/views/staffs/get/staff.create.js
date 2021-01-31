module.exports = (req, res) => {
    const title = "Thêm nhân viên" 
    res.render('./admin/templates/create.pug', {title})
}