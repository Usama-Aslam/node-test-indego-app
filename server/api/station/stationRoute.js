const router = require("express").Router();
const stationController = require("./stationController");
const stationCtrl = new stationController();

//route integration

router.get("", stationCtrl.getStationData);
router.get("/:id", stationCtrl.getStationDataByID);

module.exports = router;
