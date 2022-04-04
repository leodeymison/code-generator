const express = require('express')
const App = express()



// Routers
App.use('/', require('./routes'))


// Service
module.exports = App