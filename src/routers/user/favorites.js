const express = require("express");
const router = express.Router();

const favoriteController = require("../../app/controllers/favoriteController");

router.post("/favs/track/:id", favoriteController.addTrack);
router.get("/favs", favoriteController.getFavorite);
router.post("/favs/album/:id", favoriteController.addAlbum);
router.post("/favs/artist/:id", favoriteController.addArtist);
router.delete("/favs/track/:id", favoriteController.deleteTrack);
router.delete("/favs/album/:id", favoriteController.deleteAlbum);
router.delete("/favs/artist/:id", favoriteController.deleteArtist);

module.exports = router;