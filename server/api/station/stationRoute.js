const router = require("express").Router();
const stationController = require("./stationController");
const stationCtrl = new stationController();

router.post("", stationCtrl.getStationData);

module.exports = router;
