const path = require("path");

const express = require("express");

const userController = require("../controllers/user");

const router = express.Router();

// routes

router.get("/", userController.getHome);

router.get("/pastor", userController.getAboutPastor);

router.get("/church-vision", userController.getAboutChurch);

router.get("/event-calendar", userController.getEventCalendar);

router.get("/event-photos", userController.getEventPhotos);

router.get("/contact", userController.getContact);

router.get("/giving", userController.getGiving);

// exports

module.exports = router;
