const router = require('express').Router()
const Start = require('./controllers/rest/start')

// Rest
router.get('/rest', Start)


module.exports = router