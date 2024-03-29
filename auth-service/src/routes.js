const { Router } = require('express')
const SessionController = require('./controllers/session-ctrl')

const routes = new Router()

routes.post('/create-session', SessionController.create)
routes.get('/verify-session', SessionController.verify)

module.exports = routes