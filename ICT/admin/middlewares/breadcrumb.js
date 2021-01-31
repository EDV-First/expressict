module.exports = (req, res, next) => {
    const arrayUrl = req.originalUrl.split("/")
    arrayUrl.shift()
    let subUrl = ''
    let breadcrumb = arrayUrl.map(nameUrl => {
        subUrl += `/${nameUrl}`
        return {url : subUrl, name : nameUrl}
    })
    breadcrumb[breadcrumb.length - 1].active = true
    breadcrumb[0].name = "Home"

    res.locals.breadcrumb = breadcrumb
    next()
}