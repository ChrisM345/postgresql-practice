const express = require("express");
const router = express.Router();

const controller = require("../controllers/userController");

router.get("/new", controller.get);
router.post("/new", controller.post);
router.get("/delete", controller.getDeleteUsers);
router.get("/delete/confirm", controller.confirmDelete);

module.exports = router;
