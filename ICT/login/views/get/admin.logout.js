module.exports = (req, res) => {
    res.clearCookie('_id')
    res.redirect('/login/admin')
}