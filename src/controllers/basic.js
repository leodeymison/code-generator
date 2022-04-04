const fs = require('fs')
const startFolder = require('../models/Folders/js-api')
const config = {
    name: 'ProjectX'
}
const data = `Ok`

function basicStart(req,res){
    startFolder(config.name)
    fs.writeFile(`projects/${config.name}/file.html`, data, (err) => {
        if(err) {
            res.send(err)
        }
        else{
            res.send('Files successfully created')
        }
    })
}

module.exports = basicStart