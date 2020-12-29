const { crudDownload } = require("./api/download/downloadSwagger");
const {
  getAllStation,
  getStationByID,
} = require("./api/station/stationSwagger");

//schema
const indegoSchema = {
  Indego: {
    name: "Indego",
    in: "body",
    type: "object",
    properties: {
      geometry: {
        type: "object",
        properties: {
          coordinates: {
            type: "array",
            items: {
              type: "number",
            },
          },
          type: { type: "string" },
        },
      },
      properties: {
        type: "object",
        properties: {
          id: { type: "number" },
          name: { type: "string" },
          coordinates: {
            type: "array",
            items: {
              type: "number",
            },
          },
          totalDocks: { type: "number" },
          docksAvailable: { type: "number" },
          bikesAvailable: { type: "number" },
          classicBikesAvailable: { type: "number" },
          smartBikesAvailable: { type: "number" },
          electricBikesAvailable: { type: "number" },
          rewardBikesAvailable: { type: "number" },
          rewardDocksAvailable: { type: "number" },
          kioskStatus: { type: "string" },
          kioskPublicStatus: { type: "string" },
          kioskConnectionStatus: { type: "string" },
          kioskType: { type: "number" },
          addressStreet: { type: "string" },
          addressCity: { type: "string" },
          addressState: { type: "string" },
          addressZipCode: { type: "string" },
          bikes: {
            type: "array",
            items: {
              type: "object",
              properties: {
                dockNumber: { type: "number" },
                isElectric: { type: "boolean" },
                isAvailable: { type: "boolean" },
                battery: { type: "number" },
              },
            },
          },
          closeTime: { type: "string" },
          eventEnd: { type: "string" },
          eventStart: { type: "string" },
          isEventBased: { type: "boolean" },
          isVirtual: { type: "boolean" },
          kioskId: { type: "number" },
          notes: { type: "string" },
          openTime: { type: "string" },
          publicText: { type: "string" },
          timeZone: { type: "string" },
          trikesAvailable: { type: "number" },
          latitude: { type: "number" },
          longitude: { type: "number" },
        },
      },
      type: { type: "string" },
    },
  },
};

// Swagger set up
const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Task-App",
      version: "1.0.0",
      description: "A Simple app to fetch ride data and weather info",
      license: {
        name: "MIT",
        url: "https://choosealicense.com/licenses/mit/",
      },
      contact: {
        name: "Swagger",
        url: "https://swagger.io",
        email: "Info@SmartBear.com",
      },
    },
    servers: [
      {
        url: "http://localhost:4000/api/v1",
      },
    ],
    paths: {
      "/indego-data-fetch-and-store-it-db": crudDownload,
      "/stations?at={timestamp}": getAllStation,
      "/stations/{id}?at={timestamp}": getStationByID,
    },
    components: {
      schemas: {
        ...indegoSchema,
      },
    },
  },
  apis: [],
};

module.exports = options;
