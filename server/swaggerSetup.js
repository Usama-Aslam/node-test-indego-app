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
    paths: {},
    components: {
      schemas: {},
    },
    securityDefinitions: {
      Basic: {
        type: "basic",
      },
      Bearer: {
        type: "apiKey",
        name: "Authorization",
        in: "header",
        description:
          "For accessing the API a valid token must be passed in all the queries in the 'Authorization' header.",
      },
    },
  },
  apis: [],
};

module.exports = options;
