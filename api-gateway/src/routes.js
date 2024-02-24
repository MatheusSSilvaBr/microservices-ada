const { Router } = require('express')
const SessionHandler = require('./handlers/session-handler')
const AddressHandler = require('./handlers/address-handler')
const RegisterHandler = require('./handlers/register-handler')
const OrderHandler = require('./handlers/order-handler')
const authRoute = require('./middlewares/auth')

const routes = new Router()

routes.post('/session', SessionHandler.create)

//Auth Middleware 
routes.use(authRoute)
routes.post('/address', AddressHandler.search)
routes.post('/register', RegisterHandler.register)
routes.post('/order', OrderHandler.register)

module.exports = routes