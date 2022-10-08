const { DataTypes } = require('sequelize')
const sequelize = require('../config/db')

const Person = sequelize.define('Person', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false
  },

  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },

  residence: {
    type: DataTypes.STRING,
    allowNull: false
  },

  date: {
    type: DataTypes.STRING,
    allowNull: false
  },

  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  
  age: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  sex: {
    type: DataTypes.STRING,
    allowNull: false
  },

  contact: {
    type: DataTypes.STRING,
    allowNull: false
  },

  image: {
    type: DataTypes.STRING,
    allowNull: false
  },
})

module.exports = Person

