const fetch = require('node-fetch')

module.exports = async (req, res) => {
    const getStaffs = await fetch('http://localhost:3000/api/staffs')
    const data = await getStaffs.json()
    const title = "Nhân viên"
    const notification = req.query.notification
    const url = "/admin/staffs"
    
    res.render("./admin/templates/view.all.pug", {data, title, notification, url})
}