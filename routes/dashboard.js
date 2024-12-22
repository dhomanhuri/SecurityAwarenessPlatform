var express = require("express");
var router = express.Router();
const dashboardControllers = require("../controllers/dashboardControllers");
const { auth_asguest } = require("../middleware/auth");
/* GET home page. */
router.get("/", auth_asguest, dashboardControllers.index);
router.get("/abc", function (req, res) {
    res.json("hehe");
});

module.exports = router;
