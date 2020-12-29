const request = require("supertest");

const { app } = require("../server");
const { IndegoDataModel } = require("../model/indegoModel");

describe("POST /indego-data-fetch-and-store-it-db", () => {
  it("should post indegoData to the database", (done) => {
    request(app)
      .post("/api/v1/indego-data-fetch-and-store-it-db")
      .set("x-auth-token", "123")
      .expect(200)
      .end(done);
  }).timeout(500000);
});

describe("GET /stations", () => {
  it("should GET stations from database", (done) => {
    const at = "2020-12-29T06:53:50.590Z";
    request(app)
      .post(`/api/v1/stations?at=${at}`)
      .set("x-auth-token", "123")
      .expect(200)
      .end(done);
  }).timeout(500000);

  it("should return 404 data not found for stations", (done) => {
    const at = "2020-12-29T06:53:50.590Z";
    request(app)
      .post(`/api/v1/stations?at=${at}`)
      .set("x-auth-token", "123")
      .expect(404)
      .end(done);
  }).timeout(500000);
});
