require('dotenv').config({path: './order-service/.env'})
const express = require('express')
const routes = require('./src/routes')

const PORT = process.env.PORT || 3006

const app = express()
app.use(express.json())
app.use(routes)

app.listen(PORT, () => console.log(`Server Order listening on PORT::: ${PORT}`))
