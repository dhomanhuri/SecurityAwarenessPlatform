var express = require("express");
var router = express.Router();
const authControllers = require("../controllers/authControllers");
const groupControllers = require("../controllers/groupControllers");
const apiControllers = require("../controllers/apiControllers");

router.get("/verify-email", authControllers.verified_mail);
router.post("/submit-phishing", apiControllers.submit_phishing);
router.get("/group", apiControllers.group);
router.post("/group", apiControllers.group_store);
router.put("/group/:id", apiControllers.group_update);
router.delete("/group/:id", apiControllers.group_destroy);
router.get("/group_data", apiControllers.group_data);
router.get("/group_data/:id", apiControllers.group_data_company);
router.post("/group_data", apiControllers.group_data_store);
router.put("/group_data/:id", apiControllers.group_data_update);
router.delete("/group_data/:id", apiControllers.group_data_destroy);
module.exports = router;
