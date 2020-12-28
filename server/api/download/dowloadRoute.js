const router = require("express").Router();
const downloadController = require("./downloadController");
const downloadCtrl = new downloadController();

router.post("", downloadCtrl.fetchData);

module.exports = router;
