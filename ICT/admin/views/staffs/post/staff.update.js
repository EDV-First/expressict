const fetch = require("node-fetch")
const Staff = require("../../../../models/model.staffs.js")

module.exports = async (req, res) => {
    // because checkbox when active : name = "on"
    req.body.staffstatus ? req.body.staffstatus = true : req.body.staffstatus = false  
    const dateNow = await fetch("http://worldtimeapi.org/api/ip")
    const dateNowJson = await dateNow.json()
    const getDate = dateNowJson.datetime.split("T")
    req.body.datecreated = getDate[0]
    if ( req.body.avatar ) {
        req.body.avatar = `/static/${req.file.path.split("\\").slice(1).join("/")}` 
    }
    
    await Staff.updateOne({_id : req.params.id}, req.body)

    res.redirect('/admin/staffs')
}