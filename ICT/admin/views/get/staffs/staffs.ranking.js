const fetch = require('node-fetch')

module.exports = async (req, res) => {
    const get_staffs = await fetch('http://localhost:3000/api/staffs')
    const staffs = await get_staffs.json()
    res.render("./admin/templates/staffs/staffs.ranking.pug", {staffs})
}