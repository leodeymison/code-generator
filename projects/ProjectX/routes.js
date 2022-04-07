const router = require('express').Router()

// Rest

    router.get("/test", (req,res) => {
        res.send('ok')
    })
    router.post("/test2", (req,res) => {
        res.send('ok')
    })

module.exports = router
