module.exports = (req, res, next) => {
    // url = admin/staff/list
    const arrayUrl = req.originalUrl.split("/") // ["", "admin", "staff", "list"] 
    arrayUrl.shift() // ["admin", "staff", "list"] 
    let subUrl = ''
    let breadcrumb = arrayUrl.map(nameUrl => {
        subUrl += `/${nameUrl}` // subUrl = "/admin"
        return {url : subUrl, name : nameUrl} // {url : '/admin', name : "admin"}
    })
    // now breadcrumb = [{}, {}, ...]
    breadcrumb[breadcrumb.length - 1].active = true // last obj in breadcrumb add propertie active = true
    breadcrumb[0].name = "Home" // {url : '/admin', name : "Home"}

    res.locals.breadcrumb = breadcrumb
    next()
}