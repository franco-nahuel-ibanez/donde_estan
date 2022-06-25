const router = require('express').Router()
const personController = require('../controllers/person.controller')
const upload = require('../middleware/upload')

router.get('/all', personController.getAll)
router.get('/:name', personController.findByName)
router.post('/register', upload, personController.registerPerson)
router.delete('/:id', personController.deletePerson)

module.exports = router