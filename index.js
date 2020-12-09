const express = require('express')

const app = express()
const port = 3000

require('./configs.js')(app, express)
require('./routers.js')(app)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
