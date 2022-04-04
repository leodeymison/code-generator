const router = require('express').Router()
const Basic = require('./controllers/basic')

router.get('/', Basic)


module.exports = router