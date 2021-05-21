const Router = require('express').Router()
const {viewCustomer,viewCustomerById,addCustomer} = require('./Controller')
const {viewCustomerByIdValidator,addCustomerValidator} = require('../Validations')


Router.get('/get-customers',viewCustomer)
Router.post('/get-customers/:_id',viewCustomerByIdValidator,viewCustomerById)
Router.post('/add-customers/',addCustomerValidator,addCustomer)

module.exports = Router