const express = require("express");

const adminController = require("../controllers/admin");
const { Router } = require("express");

const router = express.Router();

router.get("/admin-event-calendar", adminController.getEventCalendar);

router.get("/admin-event-photos", adminController.getEventPhotos);

router.get("/add-album", adminController.getAddAlbum);

router.post("/add-album", adminController.postAddAlbum);

router.post("/delete-photo", adminController.postDeletePhoto);

router.get('/edit-photo/:albumId', adminController.getEditProduct)

router.post("/edit-photo", adminController.postEditPhoto);

// router.get('/admin-add-photo', adminController.getAddPhoto)

// router.post('/add-photo', adminController.postAddPhoto)

module.exports = router;
