const dayjs = require("dayjs");
const axios = require("axios");

const { IndegoDataModel } = require("../../model/indegoModel");
const { openWeatherAPI } = require("../../config/constant");

class Station {
  async getStationData(req, res) {
    try {
      const { at } = req.query;
      const url = `${openWeatherAPI}?q=Philadelphia&appid=${process.env.openWeatherAPI}`;

      //fetching weatherData and stationData
      const getWeather = axios.get(url);

      const getStation = IndegoDataModel.find({
        createdAt: { $gte: at, $lt: dayjs().add(1, "m") },
      }).sort({ createdAt: 1 });

      //parallel execution of request
      const data = await Promise.allSettled([getStation, getWeather]);

      const stationData = data[0].value;
      const weatherData = data[1].value;

      if (!stationData.length > 0) throw new Error("data not found");

      //response

      res.status(200).send({
        at: stationData[0].createdAt,
        stationData,
        weatherData: weatherData.data,
      });
    } catch (error) {
      res.status(404).send({ error: { message: error.message } });
    }
  }
}

module.exports = Station;
