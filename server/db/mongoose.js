const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose
  .connect("mongodb://localhost:27017/task-test", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("====>Mongodb connected<===="))
  .catch((err) => console.log("Error Establishing connection"));

module.exports = { mongoose };
