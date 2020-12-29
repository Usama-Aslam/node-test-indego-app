const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
const url = process.env.mongoURL || "mongodb://localhost:27017/task-test";
mongoose
  .connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("====>Mongodb connected<===="))
  .catch((err) => console.log("Error Establishing connection"));

module.exports = { mongoose };
