const express = require("express");
const router = express.Router();

const userController = require("../../app/controllers/userController");

router.post("/user", userController.createUser);
router.get("/user", userController.getUser);
router.get("/user/id", userController.getUserById);

module.exports = router;