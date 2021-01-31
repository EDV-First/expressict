const fetch = require('node-fetch')

module.exports = async (req, res) => {
    const getStaffs = await fetch('http://localhost:3000/api/staffs')
    const staffs = await getStaffs.json()
    res.render('./home/templates/staffs.pug', {staffs})
}