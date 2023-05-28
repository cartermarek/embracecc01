// models
const Home = require("../models/home");
const Album = require("../models/album");

// get home page
exports.getHome = (req, res, next) => {
	res.render("user/index", {
		pageTitle: "Home",
		path: "/",
		isAuthenticated: req.isLoggedIn
	});
};

// get about page / pastor
exports.getAboutPastor = (req, res, next) => {
	res.render("user/about/pastor", {
		pageTitle: "About Pastor Tony",
		path: "/pastor",
		isAuthenticated: req.isLoggedIn
	});
};

// get about page / church
exports.getAboutChurch = (req, res, next) => {
	res.render("user/about/church-vision", {
		pageTitle: "About Church Vision",
		path: "/church-vision",
		isAuthenticated: req.isLoggedIn
	});
};

// get event calendar page
exports.getEventCalendar = (req, res, next) => {
	res.render("user/event/event-calendar", {
		pageTitle: "Event Calendar",
		path: "/event-calendar",
		isAuthenticated: req.isLoggedIn
	});
};

// get event calendar page
exports.getEventPhotos = (req, res, next) => {
	Album.findAll().then((albums) => {
		res.render("user/event/event-photos", {
			albums: albums,
			pageTitle: "Event Photos",
			path: "/event-photos",
			isAuthenticated: req.isLoggedIn
		});
	})
};

// get contact page
exports.getContact = (req, res, next) => {
	res.render("user/contact", {
		pageTitle: "Contact Us",
		path: "/contact",
		isAuthenticated: req.isLoggedIn
	});
};

// get giving page
exports.getGiving = (req, res, next) => {
	res.render('user/giving', {
		pageTitle: 'Giving',
		path: '/giving',
		isAuthenticated: req.isLoggedIn
	})
}