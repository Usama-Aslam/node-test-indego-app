const dayjs = require("dayjs");
const axios = require("axios");

const { IndegoDataModel } = require("../../model/indegoModel");
const { openWeatherAPI } = require("../../config/constant");
const { openWeatherAPIKEY } = require("../../config/key");

class Station {
  async getStationData(req, res) {
    try {
      const { at } = req.query;
      const url = `${openWeatherAPI}?q=Philadelphia&appid=${openWeatherAPIKEY}`;

      //fetching weatherData and stationData
      //@param {string} - api of openWeather
      const getWeather = axios.get(url);

      //@param {Date} - passing Date in dayJS package
      const getStation = IndegoDataModel.find({
        createdAt: { $gte: at, $lt: dayjs(at).add(1, "M") },
      });

      //parallel execution of request
      const data = await Promise.allSettled([getStation, getWeather]);

      const stationData = data[0].value;
      const weatherData = data[1].value;

      if (!stationData.length > 0 || !weatherData)
        throw new Error("data not found");

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

  async getStationDataByID(req, res) {
    try {
      const { id } = req.params;
      const { at } = req.query;

      const url = `${openWeatherAPI}?q=Philadelphia&appid=${openWeatherAPIKEY}`;

      //fetching weatherData and stationData
      //@param {string}- api of openWeather
      const getWeather = axios.get(url);

      const getStation = IndegoDataModel.findOne({
        "properties.kioskId": id,
        createdAt: at,
      });

      //parallel execution of request
      const data = await Promise.allSettled([getStation, getWeather]);

      const stationData = data[0].value;
      const weatherData = data[1].value;

      if (!stationData || !weatherData) throw new Error("data not found");

      res.status(200).send({
        at: stationData.createdAt,
        stationData,
        weatherData: weatherData.data,
      });
    } catch (error) {
      res.status(404).send({ error: { message: error.message } });
    }
  }
}

module.exports = Station;
