const {Schema, model} = require('mongoose')

const PersonSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    residence:{
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: String,
        required: true,
        trim: true
    },
    description:{
        type: String,
        trim: true,
        maxlength: 500
    },
    age: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        required: true,
        trim: true
    },
    contact:{
        type: String,
        trim: true
    },
    image:{
        type: String,
        trim: true
    }
})

module.exports = model('Persons', PersonSchema)