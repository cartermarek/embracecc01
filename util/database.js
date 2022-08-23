const Sequelize = require("sequelize");

const sequelize = new Sequelize("photo-album", "root", "G1u9a8m6", {
	dialect: "mysql",
	host: "localhost",
});

module.exports = sequelize;
