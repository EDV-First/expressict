const fetch = require('node-fetch')
const users = require('../../../models/model.user.js') 

module.exports = async (req, res) => {

    const get_user = await fetch('http://localhost:3000/api/users')
    const users    = await get_user.json()
    
    res.render('./admin/templates/users.pug', {users})
}