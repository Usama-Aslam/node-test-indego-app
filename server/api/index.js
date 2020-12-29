const router = require("express").Router();

const download = require("./download/dowloadRoute");
const station = require("./station/stationRoute");

router.use("/indego-data-fetch-and-store-it-db", download);
router.use("/stations", station);

module.exports = router;
