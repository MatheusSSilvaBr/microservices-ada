require('dotenv').config({path: './api-gateway/.env'})
const express = require('express')
const routes = require('./src/routes')

const PORT = process.env.PORT || 3001

const app = express()
app.use(express.json())
app.use(routes)

app.listen(PORT, () => console.log(`Server API Gateway listening on PORT::: ${PORT}`))
