const Folders = require('../../models/rest/Folders')
const PackageJson = require('../../models/rest/PackageJson')
const App = require('../../models/rest/App')
const Server = require('../../models/rest/Server')
const Routes = require('../../models/rest/Routes')

const js = {
    react: {
        rest: (config) => {
            Folders(config)
            PackageJson(config)
            App(config)
            Server(config)
            Routes(config)
            return
        }
    }
}

module.exports = js