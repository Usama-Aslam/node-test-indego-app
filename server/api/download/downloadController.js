const axios = require("axios");
const _ = require("lodash");

const { indegoAPI } = require("../../config/constant");
const { IndegoDataModel } = require("../../model/indegoModel");

class Download {
  async fetchData(req, res) {
    try {
      const { data } = await axios.get(indegoAPI);
      const newIndegoData = await IndegoDataModel.create(data.features);

      res.status(200).send(newIndegoData);
    } catch (error) {
      res.status(400).send({ error: { message: error.message } });
    }
  }
}

module.exports = Download;
