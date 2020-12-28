const router = require("express").Router();

const download = require("./download/dowloadRoute");

router.use("/indego-data-fetch-and-store-it-db", download);

module.exports = router;
