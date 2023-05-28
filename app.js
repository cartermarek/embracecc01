const http = require("http");
const path = require("path");

const express = require("express"); // imports express.js - middleware
const bodyParser = require("body-parser");

//controller
const errorController = require("./controllers/error");
const sequelize = require("./util/database");
const Album = require("./models/album");
const Photo = require("./models/photo");
const User = require("./controllers/user");

const app = express();

// templating engine
app.set("view engine", "ejs");
app.set("views", "views");

// routes imports
const userRoutes = require("./routes/user");
const adminRoutes = require("./routes/admin");
const authRoutes = require("./routes/auth");
const { nextTick } = require("process");

// body parser
app.use(bodyParser.urlencoded({ extended: false })); // does the body parsing automatically / text -- needs to be placed before routes
app.use(express.static(path.join(__dirname, "public"))); // allows serving of files statically

// dummy user
// app.use((req, res, next) => {
// 	User.findById("1234567890")
// 		.then((user) => {
// 			req.user = user;
// 			next();
// 		})
// 		.catch((err) => console.log(err));
// });

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
app.use(userRoutes);
app.use("/admin", adminRoutes);
app.use(authRoutes);

app.use(errorController.get404);

// one to many
// Photo.belongsTo(Album, { constraints: true, onDelete: "CASCADE" });

// models creates table
sequelize
	.sync()
	.then((result) => {
		// console.log(result);
	})
	.catch((err) => {
		console.log(err);
	});

// const server = http.createServer(app);

// server.listen(3000);
app.listen(3000);
