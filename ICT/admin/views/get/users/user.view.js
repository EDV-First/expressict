const users = require('../../../../models/model.users.js') 

module.exports = async (req, res) => {
    const user = await users.findById(req.params.id)
    res.render('./admin/templates/users/user.view.pug', {user})
}