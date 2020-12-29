const mongoose = require("mongoose");
const { mongoURL } = require("../config/key");

mongoose.Promise = global.Promise;

mongoose
  .connect(mongoURL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("====>Mongodb connected<===="))
  .catch((err) => console.log("Error Establishing connection"));

module.exports = { mongoose };
