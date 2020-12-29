const router = require("express").Router();
const stationController = require("./stationController");
const stationCtrl = new stationController();

router.get("", stationCtrl.getStationData);

module.exports = router;
