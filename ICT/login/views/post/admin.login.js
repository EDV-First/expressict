module.exports = (req, res) => {
    const staff = res.locals.staff
    res.cookie('_id', staff.id, {signed : true})
    res.redirect('/admin/users')
}