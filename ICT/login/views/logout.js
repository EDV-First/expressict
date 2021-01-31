module.exports = (req, res) => {
    if ( req.signedCookies._userId ) {
        res.clearCookie('_userId')
        res.redirect('/')
    }
    else {
        res.clearCookie('_id')
        res.redirect('/login/admin')
    }
}