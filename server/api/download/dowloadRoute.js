const router = require("express").Router();
const downloadController = require("./downloadController");
const downloadCtrl = new downloadController();
const { auth } = require("../../middleware/authentication");

//route integration
router.post("", auth, downloadCtrl.fetchData);

module.exports = router;
