const fs = require('fs')

// Arquitetura de pastas
function startFolder(name){
    const data = [
        `${name}`,
        `${name}/src`,
        `${name}/src/controllers`,
        `${name}/src/db`,
        `${name}/src/models`,
        `${name}/src/services`,
        `${name}/tests`
    ]

    for(let i = 0; i < 10; i++){
        data.forEach(element => {
            if(!fs.existsSync("projects/"+element)){
                fs.mkdir("projects/"+element, (err) => {
                    if(err){console.log("name project err: "+err);return}
                    console.log(`\x1b[34m- Element folders successfully created\x1b[32m ✔️\x1b[37m`)})
            }
        })
    }
}
module.exports = startFolder;
