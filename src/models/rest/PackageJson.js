const fs = require('fs')
const data = (name) => {
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

function StartAppFile(config){
    const name = config.name
    fs.writeFile(`projects/${name}/package.json`, data(name), (err) => {
        if(err) {
            res.send(err)
        }
        else{
            res.send(`${name} successfully created`)
        }
    })
}

module.exports = StartAppFile