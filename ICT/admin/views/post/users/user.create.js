const users = require('../../../../models/model.users.js') 
const bcrypt = require('bcrypt')

module.exports = async (req, res) => {
    const saltRounds = 10

    salt = await bcrypt.genSalt(saltRounds)
    hash = await bcrypt.hash(req.body.password, salt) 
    req.body.password = hash
    await users.create(req.body)

    res.redirect('/admin/users')
}