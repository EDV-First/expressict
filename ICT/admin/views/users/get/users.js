const fetch = require('node-fetch')

module.exports = async (req, res) => {
    const getUser = await fetch('http://localhost:3000/api/users')
    const data = await getUser.json()
    const title = "Người dùng"
    const notification = req.query.notification
    const url = "/admin/users"

    res.render('./admin/templates/view.all.pug', {data, title, notification, url})
}