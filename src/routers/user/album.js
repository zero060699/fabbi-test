const express = require("express");
const router = express.Router();

const albumController = require("../../app/controllers/albumController");

router.post("/album", albumController.createAlbum);
router.get("/album", albumController.getAlbum);
router.get("/album/:id", albumController.getAlbumById);
router.put("/album/:id", albumController.updateAlbum);
router.delete("/album/:id", albumController.deleteAlbum);


module.exports = router;