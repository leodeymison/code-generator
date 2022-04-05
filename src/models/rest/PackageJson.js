const fs = require('fs')
const data = require('./_DATA')

function StartAppFile(name){
    fs.writeFile(`projects/${name}/package.json`, data.PackageJson(name), (err) => {
        if(err) {
            res.send(err)
        }
        else{
            res.send(`${name} successfully created`)
        }
    })
}

module.exports = StartAppFile