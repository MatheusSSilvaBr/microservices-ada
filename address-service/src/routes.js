const { Router } = require('express')
const AddressController = require('./controllers/address-ctrl')

const routes = new Router()

routes.post('/search', AddressController.create)

module.exports = routes