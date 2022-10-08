const router = require('express').Router()
const personController = require('../controllers/person.controller')
const upload = require('../middleware/upload')
const {validatePerson, validateName } = require('../utils/validator')

router.get('/all', personController.getAll)
router.get('/find/:name', validateName, personController.findByName)
router.post('/register', upload, personController.registerPerson)
router.delete('/delete/:id', personController.deletePerson)

module.exports = router