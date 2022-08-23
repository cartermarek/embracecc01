const Sequelize = require('sequelize')

const sequelize = require('../util/database')

const Album = sequelize.define('album', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: Sequelize.STRING,
    imageUrl: {
        type: Sequelize.STRING,
        allowNull: false
    },
    category: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    }
})

module.exports = Album;