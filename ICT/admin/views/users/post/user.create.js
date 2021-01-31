const Users = require('../../../../models/model.users.js') 
const bcrypt = require('bcrypt')
const querystring = require('querystring')

module.exports = async (req, res) => {
    const saltRounds = 10
    salt = await bcrypt.genSalt(saltRounds)
    hash = await bcrypt.hash(req.body.password, salt) 
    req.body.password = hash
    await Users.create(req.body)

    const query = querystring.stringify({
        notification:"Tạo tài khoản thành công !"
    });

    res.redirect(`/admin/users/?${query}`)
}