const express = require('express')
const app = express()
const port = 5000
const emailRoutes = require('./routers/emailRoutes')

app.use(emailRoutes)

app.listen(port,()=>{
    console.log(`Server run on port : ${port}`)
})