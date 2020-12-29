const router = require("express").Router();

//local files
const download = require("./download/dowloadRoute");
const station = require("./station/stationRoute");

//route integration
router.use("/indego-data-fetch-and-store-it-db", download);
router.use("/stations", station);

module.exports = router;
