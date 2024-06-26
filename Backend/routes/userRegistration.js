var express = require('express');
var router = express.Router();

let userRegistrationController = require("../controllers/userResgistration");
const {requireSignin} = require("../controllers/authController");
const isAdmin = require("../middleware/isAdmin");

router.get("/", userRegistrationController.getAllUsers);
router.post("/", userRegistrationController.createUser);
router.get("/:username", userRegistrationController.getUserByUsername);
router.put("/:username", requireSignin, userRegistrationController.updateUser);
router.put("/:username/makeAdmin", requireSignin, isAdmin, userRegistrationController.promoteToAdmin);
router.patch("/:username", requireSignin, isAdmin, userRegistrationController.enableUser);
router.delete("/:username", requireSignin, isAdmin, userRegistrationController.disableUser);

module.exports = router;