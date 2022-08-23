const http = require("http");
const path = require("path");

const express = require("express"); // imports express.js - middleware
const bodyParser = require("body-parser");

//controller
const errorController = require("./controllers/error");
const sequelize = require("./util/database");
const Album = require("./models/album");
const Photo = require("./models/photo");

const app = express();

// templating engine
app.set("view engine", "ejs");
app.set("views", "views");

// routes imports
// const adminRoutes = require("./routes/admin");
// const shopRoutes = require("./routes/user");
const userRoutes = require("./routes/user");
const adminRoutes = require("./routes/admin");

// body parser
app.use(bodyParser.urlencoded({ extended: false })); // does the body parsing automatically / text -- needs to be placed before routes
app.use(express.static(path.join(__dirname, "public"))); // allows serving of files statically

// bootstrap
app.use(
	"/css",
	express.static(path.join(__dirname, "node_modules/bootstrap/dist/css"))
);
app.use(
	"/js",
	express.static(path.join(__dirname, "node_modules/bootstrap/dist/js"))
);
app.use(
	"/js",
	express.static(path.join(__dirname, "node_modules/jquery/dist"))
);

// routes
// app.use("/admin", adminRoutes);
// app.use(shopRoutes);
app.use(userRoutes);
app.use("/admin", adminRoutes);

app.use(errorController.get404);

// one to many
// Photo.belongsTo(Album, { constraints: true, onDelete: "CASCADE" });

// models
sequelize
	.sync({ force: true })
	.then((result) => {
		// console.log(result);
	})
	.catch((err) => {
		console.log(err);
	});

const server = http.createServer(app);

server.listen(3000);
// app.listen(3000);
