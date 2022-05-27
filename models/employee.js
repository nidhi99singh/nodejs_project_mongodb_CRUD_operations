const mongoose = require('mongoose')
const { double, float } = require('webidl-conversions')

const employeeSchema = new mongoose.Schema({
    employeeName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    city: {
        type: String
    },
    department: {
        type: String
    }
})

module.exports = mongoose.model('employee', employeeSchema)