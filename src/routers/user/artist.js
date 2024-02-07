const express = require("express");
const router = express.Router();

const artistController = require("../../app/controllers/artistController");

router.post("/artist", artistController.createArtist);
router.get("/artist", artistController.getArtist);
router.get("/artist/:id", artistController.getArtistById);
router.put("/artist/:id", artistController.updateArtist);
router.delete("/artist/:id", artistController.deleteArtist);

module.exports = router;