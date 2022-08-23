const Sequelize = require('sequelize')

const sequelize = require('../util/database')

const WordOfDay = sequelize.define('wordOfDay', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    book: {
        type: Sequalize.STRING,
        allowNull: false
    },
    chapter: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    verse: {
        type: Sequelize.STRING,
        allowNull: false
    },
    scripture: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Photo;