const { check } = require("express-validator")
const handleValidator = require('./handleValidator')

const validatePerson = [
  check('name').not().isEmpty().withMessage('Name is required'),
  check('lastName').not().isEmpty().withMessage('Last name is required'),
  check('residence').not().isEmpty().withMessage('Residence is required'),
  check('date').not().isEmpty().withMessage('Date is required'),
  check('description').not().isEmpty().withMessage('Description is required'),
  check('age').not().isEmpty().withMessage('Age is required'),
  check('sex').not().isEmpty().withMessage("Sex is required"),
  check('contact').not().isEmpty().withMessage('Contact is required'),
  (req, res, next) => {
    handleValidator(req, res, next)
  }
]

const validateName = [
  check('name').not().isEmpty().withMessage('Name is required'),
  (req, res, next) => {
    handleValidator(req, res, next)
  }
]

module.exports = {validatePerson, validateName}
