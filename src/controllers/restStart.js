const Rest = require('./rest')

const RestStart = (config) => {
    Rest[config.language][config.framework][config.dataType](config)
} 

module.exports = RestStart