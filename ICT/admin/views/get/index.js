const users = require('../../models/model.user.js') 
// const fetch = require('node-fetch')

// module.exports.index = (req, res) => {
//     users.find().then((user) => {
//         res.json(user)
//     }) 
    
// }

// module.exports.users = async (req, res) => {

//     var user = await fetch('http://localhost:3000/admin')
//     var data = await user.json()
//     console.log(data[0].username)
//     res.json(data)



// }

module.exports = (req, res) => {
    res.render('./admin/templates/index.pug')
}