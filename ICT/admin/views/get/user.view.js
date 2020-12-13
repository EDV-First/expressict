const users = require('../../../models/model.user.js') 

module.exports = (req, res) => {
    users.findById(req.params.id, function(err, user) {
        res.render('./admin/templates/user.view.pug', {user})
    })
}