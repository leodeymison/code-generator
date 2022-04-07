const fs = require('fs')
const Imports = require('../models/import')


const data = () => { return `${Imports('app','./app.js')}

app.listen(3001, console.log('ok'))
`}

function StartAppFile(config){
    const name = config.name
    fs.writeFile(`projects/${name}/server.js`, data(), (err) => {
        if(err) {
            res.send(err)
        }
        else{
            res.send(`${name} successfully created`)
        }
    })
}

module.exports = StartAppFile