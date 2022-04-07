const fs = require('fs')
const Imports = require('../models/import')
const Exports = require('../models/export')

const data = () => {return `${Imports("express","express")}
const app = express()

app.use('/', require('./routes'))


${Exports("app")}
`}

function StartAppFile(config){
    const name = config.name
    fs.writeFile(`projects/${name}/app.js`, data(), (err) => {
        if(err) {
            res.send(err)
        }
        else{
            res.send(`${name} successfully created`)
        }
    })
}

module.exports = StartAppFile