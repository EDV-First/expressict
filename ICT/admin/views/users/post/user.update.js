const Users = require('../../../../models/model.users.js') 

module.exports = async (req, res) => {
    await Users.updateOne({_id : req.params.id}, req.body)
    res.redirect('/admin/users')
}