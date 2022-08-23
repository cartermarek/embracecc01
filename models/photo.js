const Sequelize = require('sequelize')

const sequelize = require('../util/database')

const Photo = sequelize.define('photo', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    imageUrl: {
        type: Sequelize.STRING,
        allowNull: false
    },
})

module.exports = Photo;