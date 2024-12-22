var express = require("express");
var router = express.Router();
const dashboardControllers = require("../controllers/dashboardControllers");
const { auth_asguest, auth_asuser } = require("../middleware/auth");
/* GET home page. */
router.get("/", auth_asuser, dashboardControllers.index);
router.get("/abc", function (req, res) {
    res.json("hehe");
});

module.exports = router;
