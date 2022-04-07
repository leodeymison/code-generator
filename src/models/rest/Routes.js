const fs = require('fs')
const Export = require('../models/export')

const data = (routes) => {
    function addRoutes(){
        var router = ""
        routes.forEach(element => {
            router += modelRouter(element.type,element.url)
        })
        return router
    }
    return `const router = require('express').Router()

// Rest
${addRoutes()}

${Export("router")}
`
}

function modelRouter(type,url){
    return `
    router.${type}("${url}", (req,res) => {
        res.send('ok')
    })`
}



function StartAppFile(config){
    const name = config.name
    fs.writeFile(`projects/${name}/routes.js`, data(config.routes), (err) => {
        if(err) {
            res.send(err)
        }
        else{
            res.send(`${name} successfully created`)
        }
    })
}

module.exports = StartAppFile