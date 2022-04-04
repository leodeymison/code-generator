const fs = require('fs')

// Arquitetura de pastas
function startFolder(name){
    if(!fs.existsSync(`projects/${name}`)){
        fs.mkdir(`projects/${name}`, (err) => {
            if(err){
                console.log(err)
                return
            }
            console.log(`${name} folders successfully created`)
        })
    }
}
module.exports = startFolder;
