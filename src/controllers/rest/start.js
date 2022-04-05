const Folders = require('../../models/rest/Folders')
const PackageJson = require('../../models/rest/PackageJson')
const App = require('../../models/rest/App')
const Server = require('../../models/rest/Server')
const Routes = require('../../models/rest/Routes')

const config = {
    name: 'ProjectX'
}


function Start(req,res){
    Folders(config.name)
    PackageJson(config.name)
    App(config.name)
    Server(config.name)
    Routes(config.name)
    res.json({mesage: 'ok'})
}

module.exports = Start