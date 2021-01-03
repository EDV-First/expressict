const Users = require('../../../../models/model.users.js') 

module.exports = async (req, res) => {
    const user = await Users.findById(req.params.id)
    res.render('./admin/templates/users/user.view.pug', {user})
}