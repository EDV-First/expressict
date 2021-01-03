module.exports = (req, res) => {
    res.render('./login/templates/admin.login.pug', {csrfToken: req.csrfToken()})
}