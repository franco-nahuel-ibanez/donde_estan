const express = require('express')
const connectDB = require('./config/db')

connectDB()
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/persons', require('./router/person.routes'))

module.exports = app
