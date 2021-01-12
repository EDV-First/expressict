const fetch = require('node-fetch')

module.exports = async (req, res) => {
    const getUser = await fetch('http://localhost:3000/api/users')
    const users = await getUser.json()
    res.render('./admin/templates/users/users.pug', {users})
}