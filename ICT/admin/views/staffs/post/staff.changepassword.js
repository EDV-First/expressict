const Staff = require("../../../../models/model.staffs.js")
const querystring = require('querystring')

module.exports = async (req, res) => {
    const query = querystring.stringify({
        notification:"Đổi mật khẩu thành công !"
    });

    res.redirect(`/admin/staffs/?${query}`)
}