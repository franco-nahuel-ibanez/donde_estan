const Person = require('../models/person.model')


const getAll = async (req, res) => {
    try {
        const data = await Person.find()
        res.status(200).json({ok: true, data})
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
    try {
        const newPerson = new Person(req.body)
        await newPerson.save()
        res.status(201).json({ok: true, data: newPerson})
    } catch (error) {
        console.log(error)
    }
}



module.exports = {
    getAll,
    findByName,
    registerPerson
}