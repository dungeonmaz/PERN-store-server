const {Sequelize} = require('sequelize')

module.exports = new Sequelize(process.env.CONNECT, {dialect: 'postgres'})