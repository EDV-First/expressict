const Staffs = require('../../../../models/model.staffs.js') 
const bcrypt = require('bcrypt')
const querystring = require('querystring')

module.exports = async (req, res) => {
    salt = await bcrypt.genSalt(10)
    hash = await bcrypt.hash(req.body.password, salt) 
    req.body.password = hash
    await Staffs.create(req.body)

    const query = querystring.stringify({
        notification:"Tạo tài khoản thành công !"
    });
    
    res.redirect(`/admin/staffs/?${query}`)
}