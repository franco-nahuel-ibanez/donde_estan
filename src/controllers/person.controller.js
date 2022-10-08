const Person = require('../models/person.model')
const fs = require('fs')
const path = require('path')

const getAll = async (req, res) => {
    try {
        //const data = await Person.find()
        res.status(200).json({ok: true, data:'data'})
    } catch (error) {
        console.log(error)
    }
}

const findByName = async (req, res) => {
    const {name} = req.params
    try {
        const data = await Person.findOne({name})
        res.status(200).json({ok: true, data})
    } catch (error) {
        console.log(error)
    }
}

const registerPerson = async (req, res) => {

    console.log(req.file)
    try {
        const newPerson = new Person({
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
        await newPerson.save()
        res.status(201).json({ok: true, data: newPerson})
    } catch (error) {
        console.log(error)
    }
}

const deletePerson = async(req, res) => {
    const {id} = req.params
    try {
        const person = await Person.findByIdAndDelete(id)
        await fs.promises.unlink(path.resolve('./src/public' + person.image))
        res.status(200).json({ok: true, data: "register deleted"})
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