const router = require('express').Router()
const Rest = require('./controllers/rest')

// Rest
router.get('/rest', (req,res) => {
    res.render('rest.ejs')
})
router.get('/rest/create', Rest.Create)


module.exports = router