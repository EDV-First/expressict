const users = require("../../../models/model.user.js") 

module.exports = async (req, res) => {
    const user = await users.find()
    res.json(user)
}