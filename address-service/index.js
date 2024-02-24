require('dotenv').config({path: './address-service/.env'})
const express = require('express')
const routes = require('./src/routes')

const PORT = process.env.PORT || 3004

const app = express()
app.use(express.json())
app.use(routes)

app.listen(PORT, () => console.log(`Server  Address listening on PORT::: ${PORT}`))
