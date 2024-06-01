const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'rakshitha@27', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;