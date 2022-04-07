module.exports = (name, nameModule) => {
    return `const ${name} = require("${nameModule}")`
}