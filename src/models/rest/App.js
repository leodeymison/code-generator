const fs = require('fs')
const data = require('./_DATA')

function StartAppFile(name){
    fs.writeFile(`projects/${name}/app.js`, data.App(), (err) => {
        if(err) {
            res.send(err)
        }
        else{
            res.send(`${name} successfully created`)
        }
    })
}

module.exports = StartAppFile