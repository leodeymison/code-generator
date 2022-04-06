const router = require('express').Router()
const Rest = require('./controllers/rest')

// Rest
router.get('/rest', Rest.View)
router.get('/rest/create', Rest.Create)


module.exports = router