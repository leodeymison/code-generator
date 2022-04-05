const App = () => {
    return `
    const express = require('express')
    const app = express()
    
    app.use('/', require('./routes'))
    
    
    module.export = app
    `
}

const Server = () => {
    return `
        const app = require('./app.js')

        app.listen(3001, console.log('ok'))
    `
}

const Routes = () => {
    return `
        const router = require('express').Router()

        // Rest
        router.get('/rest', (req,res) => {
            res.send('ok')
        })

        module.exports = router
    `
}
const PackageJson = (name) => {
    return `
    {
        "name": "${name}",
        "version": "1.0.0",
        "main": "index.js",
        "license": "MIT",
        "scripts": {
          "start": "nodemon ./src/server.js"
        },
        "dependencies": {
          "express": "^4.17.3"
        },
        "devDependencies": {
          "nodemon": "^2.0.15"
        }
      }      
    `
}

module.exports = {
    App,
    Server,
    Routes,
    PackageJson
}