const { validationResult } = require("express-validator")

const handleValidator = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(422).json({ ok: false, errors: errors.array() })
  }
  next()
}

module.exports = handleValidator