module.exports = (req, res, next) => {

    const url = req.originalUrl.split("/")
    url.shift()

    let subUrl = ''
    let breadcrumb = url.map(nameUrl => {
        subUrl += `/${nameUrl}`
        return {url : subUrl, name : nameUrl}
    })

    breadcrumb[breadcrumb.length - 1].active = true
    breadcrumb[0].name = "Home"

    
    res.locals.breadcrumb = breadcrumb

    next()
}