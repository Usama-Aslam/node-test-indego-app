//// Npm Packages Start
const express = require("express");
const cors = require("cors");
const { mongoose } = require("./db/mongoose");
const bodyParser = require("body-parser");

const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

//local files
const api = require("./api/index");
const { downloadData } = require("./job/downloadData");

require("dotenv").config({ path: __dirname + "/./../.env" });

const swaggerSetup = require("./swaggerSetup");

//app initialization
const app = express();

//middleware integrations
app.use(bodyParser.json());

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");
  // res.setHeader("Access-Control-Expose-Headers", "*");
  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "x-auth,Origin,X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);
  // res.setHeader("Access-Control-Expose-Headers", true);
  // Pass to next layer of middleware
  next();
});

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

// api
app.use("/api/v1", api);

//cronJob
downloadData.start();

//swagger setup
const specs = swaggerJsdoc(swaggerSetup);
app.use(
  "/api/v1/docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, {
    explorer: true,
  })
);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
