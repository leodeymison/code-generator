const cors = require('cors')
const express = require('express')
const App = express()
App.use(cors())

App.set('view engine','ejs')
App.use(express.static('public'))
App.use(express.urlencoded({extended: false}))
App.use(express.json())

// Routers
App.use('/', require('./routes'))


// Service
module.exports = App