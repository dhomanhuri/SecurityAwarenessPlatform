var express = require("express");
var router = express.Router();
const targetControllers = require("../controllers/targetControllers");
const { auth, auth_asuser } = require("../middleware/auth");

router.get("/", auth_asuser, targetControllers.index);
router.get("/:id", auth_asuser, targetControllers.company);
module.exports = router;
