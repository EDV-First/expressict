const Users = require("../../../../models/model.users.js")

module.exports = async (req, res) => {
    const arrId = Object.keys(req.body)
    await Users.deleteMany({_id : {$in : arrId}})
    res.redirect('/admin/users')
}