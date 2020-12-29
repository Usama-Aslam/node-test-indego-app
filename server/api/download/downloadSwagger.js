const crudDownload = {
  post: {
    tags: ["Download"],
    summary: "Download Data",
    description:
      "Use this api to download data from IndegoAPI and store in mongodb.",
    parameters: [
      {
        name: "x-auth-token",
        in: "header",
        description: "Auth Token",
        required: true,
        type: "string",
        default: "123",
      },
    ],
    responses: {
      200: {},
    },
  },
};

module.exports = { crudDownload };
