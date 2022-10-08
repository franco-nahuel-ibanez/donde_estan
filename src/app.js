const express = require('express')
const sequelize = require('./config/db')
const error404 = require('./middleware/errorNotFound')
const path = require('path')

sequelize.authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch(error => console.log('Unable to connect to the database:', error));

const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/persons', require('./router/person.routes'))

app.use(error404)

module.exports = app
