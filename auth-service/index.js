require('dotenv').config({path: './auth-service/.env'})
const express = require('express')
const routes = require('./src/routes')

const PORT = process.env.PORT || 3002

const app = express()
app.use(express.json())
app.use(routes)

app.listen(PORT, () => console.log(`Server Auth listening on PORT::: ${PORT}`))
