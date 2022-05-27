const express = require('express')
const con = require('./mongodb_connector')

const app = express()
app.use(express.json())
app.listen(9000, () => {
    console.log('server startedon port:9000')
})

con.on('open', () => {
    console.log('mongodb connected..')
})
var employeeRoutes = require('./Routes/employee')

app.use('/', employeeRoutes)
