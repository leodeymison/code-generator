const router = require('express').Router()
const RestStart = require('./controllers/rest/restStart')

const config = {
    name: 'ProjectX',
    language: "js",
    framework: "react",
    dataType: "rest",
    database: "mysql",
    routes: [
        {
            type: "get",
            url: "/test",
            controller: ''
        },
        {
            type: "post",
            url: "/test2"
        }
    ],
    controllers: [
        {
            name: "test",
            model: "email"
        }
    ],
    model: {
        email: {
            mailto: "test@gmail.com"
        },
        getAll: {

        },
        post: {

        },
    }
}

// Rest
router.get('/rest', (req,res) => {
    RestStart(config)
    res.send('ok')
})


module.exports = router