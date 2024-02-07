const express = require("express");
const router = express.Router();

const trackController = require("../../app/controllers/trackController");

router.post("/track", trackController.createTrack);
router.get("/track", trackController.getTrack);
router.get("/track/:id", trackController.getTrackById);
router.put("/track/:id", trackController.updateTrack);
router.delete("/track/:id", trackController.deleteTrack);

module.exports = router;