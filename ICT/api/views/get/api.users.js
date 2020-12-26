const users = require("../../../models/model.users.js") 

module.exports = async (req, res) => {
    const user = await users.find()
    res.json(user)
}