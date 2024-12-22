var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
    res.json("hehe");
});
router.get("/abc", function (req, res) {
    res.json("hehe");
});

module.exports = router;
