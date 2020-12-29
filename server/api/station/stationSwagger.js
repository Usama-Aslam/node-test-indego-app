const getAllStation = {
  get: {
    tags: ["Stations"],
    description: "GET all stations. Pass ?at={timestamp} as query",
    summary: "GET Stations and Weather",
    parameters: [
      {
        name: "x-auth-token",
        in: "header",
        description: "Auth Token",
        required: true,
        type: "string",
        default: "123",
      },
      {
        name: "at",
        in: "query",
        description: "provide timestamp",
        required: true,
        schema: {
          type: "string",
        },
      },
    ],
    responses: {
      200: {
        description: "successful operation",
        schema: {
          $ref: "#/components/schemas/Indego",
        },
      },
      404: {
        description: "data not found",
      },
    },
  },
};

const getStationByID = {
  get: {
    tags: ["Stations"],
    description: "GET station. Pass ?at={ID} as query",
    summary: "GET Stations and Weather",
    parameters: [
      {
        name: "x-auth-token",
        in: "header",
        description: "Auth Token",
        required: true,
        type: "string",
        default: "123",
      },
      {
        name: "id",
        in: "path",
        description: "provide koisk id of station",
        required: true,
        schema: {
          type: "integer",
        },
      },
      {
        name: "at",
        in: "query",
        description: "provide timestamp",
        required: true,
        schema: {
          type: "string",
        },
      },
    ],
    responses: {
      200: {
        description: "successful operation",
        schema: {
          $ref: "#/components/schemas/Indego",
        },
      },
      404: {
        description: "data not found",
      },
    },
  },
};

module.exports = { getAllStation, getStationByID };
