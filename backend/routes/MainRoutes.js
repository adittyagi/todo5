const express = require("express");
const mainController = require("../controllers/MainController");
const loginController = require("../controllers/LoginController");
const router = express.Router();
const app = express();

router.route("/").get(mainController.profile);
router.route("/signup").get(loginController.signup);
router.route("/signin").get(loginController.signin);
router.route("/signup").post(loginController.signup);
router.route("/signin").post(loginController.signin);

module.exports = router;