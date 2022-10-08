const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('donde_estan_db', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql',
});


module.exports = sequelize;