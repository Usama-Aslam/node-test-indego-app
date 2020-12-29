const router = require("express").Router();
const stationController = require("./stationController");
const stationCtrl = new stationController();
const { auth } = require("../../middleware/authentication");

//route integration

router.get("", auth, stationCtrl.getStationData);
router.get("/:id", auth, stationCtrl.getStationDataByID);

module.exports = router;
