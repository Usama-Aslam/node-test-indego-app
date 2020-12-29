const axios = require("axios");
const CronJob = require("cron").CronJob;

const { indegoAPI } = require("../config/constant");
const { IndegoDataModel } = require("../model/indegoModel");

const downloadData = new CronJob(
  "* * 1 * * *",
  function () {
    console.log("======>Job Started<=====");

    //fetching data and storing in database
    axios
      .get(indegoAPI)
      .then(({ data }) => {
        IndegoDataModel.create(data.features);
      })
      .then(() => console.log("--------data saved---------"))
      .catch((err) => console.log(err.message));
  },
  null,
  true
);

module.exports = { downloadData };
