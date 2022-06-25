const express = require('express')
const connectDB = require('./config/db')
const error404 = require('./middleware/errorNotFound')
const path = require('path')

connectDB()
const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/persons', require('./router/person.routes'))

app.use(error404)

module.exports = app
