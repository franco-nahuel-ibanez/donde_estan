const Person = require('../models/person.model')
const fs = require('fs')
const path = require('path')

const getAll = async (req, res) => {
  try {
    const data = await Person.findAll()
    res.status(200).json({ ok: true, data })
  } catch (error) {
    console.log(error)
  }
}

const findByName = async (req, res) => {
  const { name } = req.params
  try {
    const data = await Person.findOne({ name: name })
    if (!data) return res.status(404).json({ ok: false, data: "Person not found" })
    res.status(200).json({ ok: true, data })
  } catch (error) {
    console.log(error)
  }
}

const registerPerson = async (req, res) => {

  try {
    const newPerson = await Person.create({
      name: req.body.name,
      lastName: req.body.lastName,
      residence: req.body.residence,
      date: req.body.date,
      description: req.body.description,
      age: req.body.age,
      sex: req.body.sex,
      contact: req.body.contact,
      image: '/img/' + req.file.filename
    })
    res.status(200).json({ ok: true, data: newPerson })
  } catch (error) {
    console.log(error)
  }
}

const deletePerson = async (req, res) => {
  const { id } = req.params
  try {
    const person = await Person.findOne({id})
    //await fs.promises.unlink(path.resolve('./src/public' + person.image))
    res.status(200).json({ ok: true, data: "register deleted" })
  } catch (error) {
    console.log(error)
  }
}


module.exports = {
  getAll,
  findByName,
  registerPerson,
  deletePerson
}