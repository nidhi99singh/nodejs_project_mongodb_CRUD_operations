const express = require('express')
const employee = require('../models/employee')
const router = express.Router()
const Employee = require('../models/employee')

//check connection

router.get('/', async (req, res) => {
    res.json({ message: 'successful api' })

})

//get employee data

router.get('/getallemployees', async (req, res) => {
    const employees = await employee.find()
    res.json(employees)
})

//save employee data

router.post('/addemployee', async (req, res) => {
    const body = req.body
    try {
        const employee = new Employee({
            employeeName: body.employeeName,
            age: body.age,
            city: body.city,
            department: body.department
        })

        const saveEmployee = await employee.save()
        res.json(saveEmployee)
    } catch (error) {
        res.send("error:" + error)
    }
})

//get employee by id

router.get('/getemployeebyid/:id', async (req, res) => {
    const employeeId = req.params.id
    try {
        const employeeResponse = await employee.findById(employeeId)
        res.json(employeeResponse)
    } catch (error) { res.json("Error:" + error) }
})

//delete employeebyid

router.delete('/deleteemployee/:id', async (req, res) => {
    const employeeId = req.params.id
    try {
        const employeeDeleted = await Employee.findByIdAndDelete(employeeId)
        res.json("employee deleted")
    } catch (error) { res.json(error) }
})

//update employee department

router.patch('/updatedepartment/:id', async (req, res) => {
    const employeeId = req.params.id

    try {
        const employeeResponse = await Employee.findById(employeeId)
        employeeResponse.department = req.body.department
        const updayedEmployyee = await employeeResponse.save()
        res.json(updayedEmployyee)

    } catch (error) { res.json(error) }
})

//update department and city

router.put('/updatedepartmentandage/:id', async (req, res) => {

    const employeeId = req.params.id
    try {
        const employeeResponse = await Employee.findById(employeeId)
        employeeResponse.department = req.body.department
        employeeResponse.city = req.body.city
        const updatedEmployee = await employeeResponse.save()
        res.json(updatedEmployee)

    } catch (error) {
        res.json("message:" + error)
    }

})
//get employee by city

router.get('/getallemployeebycity/:city', async (req, res) => {
    const City = req.params.city
    var query = { city: City }
    const employees = await employee.find(query)
    res.json(employees)
})

module.exports = router