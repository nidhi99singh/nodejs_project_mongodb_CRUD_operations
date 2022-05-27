const mongoose = require('mongoose')

const url = 'mongodb://localhost/employee'

mongoose.connect(url)

const con = mongoose.connection

module.exports = con