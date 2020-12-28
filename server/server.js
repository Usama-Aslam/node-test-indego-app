const express = require("express");
const { mongoose } = require("./db/mongoose");
const bodyParser = require("body-parser");
const api = require("./api/index");

const app = express();

app.use(bodyParser.json());

app.use("/api/v1", api);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
