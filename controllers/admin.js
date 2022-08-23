// models
const res = require("express/lib/response");
const Album = require("../models/album");
const Photo = require("../models/photo");

// get events calendar page
exports.getEventCalendar = (req, res, next) => {
	Album.findAll().then((albums) => {
		res.render("admin/admin-event-calendar", {
			albums: albums,
			pageTitle: "Admin Event Calendar",
			path: "/admin/admin-event-calendar",
		});
	});
};

// get events photos page
exports.getEventPhotos = (req, res, next) => {
	Album.findAll().then((albums) => {
		res.render("admin/admin-event-photos", {
			albums: albums,
			pageTitle: "Admin Event Photos",
			path: "/admin/admin-event-photos",
		});
	});
};

// get add album
exports.getAddAlbum = (req, res, next) => {
	res.render("admin/add-photo", {
		pageTitle: "Add Photo to Album",
		path: "/admin/add-photo",
	});
};

// post add album
exports.postAddAlbum = (req, res, next) => {
	const title = req.body.title;
	const imageUrl = req.body.imageUrl;
	const category = req.body.category;
	const description = req.body.description;
	Album.create({
		title: title,
		imageUrl: imageUrl,
		category: category,
		description: description,
	})
		.then((result) => {
			console.log("Created Album");
			res.redirect("/admin/admin-event-photos");
		})
		.catch((err) => {
			console.log(err);
		});
};

// get update photo
exports.getEditProduct = (req, res, next) => {
	const editMode = req.query.edit;
	if (!editMode) {
		return res.redirect("/");
	}
	const albId = req.params.albumId;
	Album.findByPk(albId)
		.then((album) => {
			if (!album) {
				return res.redirect("/");
			}
			res.render("admin/edit-photo", {
				pageTitle: "Edit Photo",
				path: "/admin/edit-photo",
				editing: editMode,
				album: album,
			});
		})
		.catch((err0) => console.log(err));
};

// update photo
exports.postEditPhoto = (req, res, next) => {
	const albId = req.body.albumId;
	const updatedTitle = req.body.title;
	const updatedImageUrl = req.body.imageUrl;
	const updatedCategory = req.body.category;
	const updatedDesc = req.body.category;
	Album.findByPk(albId)
		.then((album) => {
			album.title = updatedTitle;
			album.imageUrl = updatedImageUrl;
			album.category = updatedCategory;
			album.description = updatedDesc;
			return album.save();
		})
		.then((result) => {
			console.log("UPDATED PHOTO");
			res.redirect("/admin/admin-event-photos");
		})
		.catch((err) => console.log(err));
};

// delete photo
exports.postDeletePhoto = (req, res, next) => {
	const albumId = req.body.albumId;
	Album.findByPk(albumId)
		.then((album) => {
			return album.destroy();
		})
		.then((result) => {
			console.log("DESTORYED ALBUM");
			res.redirect("/admin/admin-event-photos");
		})
		.catch((err) => {
			console.log(err);
		});
};

// get add photos
// exports.getAddPhoto = (req, res, next) => {
// 	Photo.findAll().then((photos) => {
// 		res.render("admin/admin-add-photo", {
// 			photos: photos,
// 			pageTitle: "Admin Add Photo",
// 			path: "/admin/admin-add-photo",
// 		});
// 	});
// };

// post add photo
// exports.postAddPhoto = (req, res, next) => {
// 	const title = req.body.title;
// 	const imageUrl = req.body.imageUrl;
// 	Photo.create({
// 		title: title,
// 		imageUrl: imageUrl,
// 	})
// 		.then((result) => {
// 			console.log("Added Photo");
// 			res.redirect("/admin/admin-event-photos");
// 		})
// 		.catch((err) => {
// 			console.log(err);
// 		});
// };

// get all photos from album
// const albumId = req.params.albumId;
// Photo.findbyPk(albumId)
// 	.then((photo) => {
// 		if (!photo) {
// 			return res.redirect("/admin-events");
// 		}
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

// post add photos
// post add album
// exports.postAddPhoto = (req, res, next) => {
// 	const title = req.body.title;
// 	const imageUrl = req.body.imageUrl;
// 	Photo.create({
// 		title: title,
// 		imageUrl: imageUrl,
// 	})
// 		.then((result) => {
// 			console.log("Created Photo");
// 			res.redirect("/admin/admin-events");
// 		})
// 		.catch((err) => {
// 			console.log(err);
// 		});
// };
