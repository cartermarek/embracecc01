const Sequelize = require("sequelize");

const sequelize = new Sequelize("photo-album", "root", "password", {
	dialect: "mysql",
	host: "localhost",
});

module.exports = sequelize;
