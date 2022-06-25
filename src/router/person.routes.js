const router = require('express').Router()
const personController = require('../controllers/person.controller')

router.get('/all', personController.getAll)
router.get('/:name', personController.findByName)
router.post('/register', personController.registerPerson)

module.exports = router