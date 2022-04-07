const data = () => {
    return `Hello world`
}

function Controllers(config){
    const name = config.name
    fs.writeFile(`projects/${name}/controllers/test.js`, data(), (err) => {
        if(err) {
            res.send(err)
        }
        else{
            res.send(`${name} successfully created`)
        }
    })
}

module.exports = Controllers