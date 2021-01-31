module.exports = (req, res) => {
    req.query.next ? res.redirect(req.query.next) : res.redirect("/") 
}