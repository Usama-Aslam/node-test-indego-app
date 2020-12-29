const mongoose = require("mongoose");

const indegoDataSchema = new mongoose.Schema(
  {
    geometry: {
      coordinates: [{ type: Number }],
      type: { type: String },
    },
    properties: {
      id: { type: Number },
      name: { type: String },
      coordinates: [{ type: Number }],
      totalDocks: { type: Number },
      docksAvailable: { type: Number },
      bikesAvailable: { type: Number },
      classicBikesAvailable: { type: Number },
      smartBikesAvailable: { type: Number },
      electricBikesAvailable: { type: Number },
      rewardBikesAvailable: { type: Number },
      rewardDocksAvailable: { type: Number },
      kioskStatus: { type: String },
      kioskPublicStatus: { type: String },
      kioskConnectionStatus: { type: String },
      kioskType: { type: Number },
      addressStreet: { type: String },
      addressCity: { type: String },
      addressState: { type: String },
      addressZipCode: { type: String },
      bikes: [
        {
          dockNumber: { type: Number },
          isElectric: { type: Boolean },
          isAvailable: { type: Boolean },
          battery: { type: Number },
        },
      ],
      closeTime: { type: mongoose.Schema.Types.Mixed },
      eventEnd: { type: mongoose.Schema.Types.Mixed },
      eventStart: { type: mongoose.Schema.Types.Mixed },
      isEventBased: { type: Boolean },
      isVirtual: { type: Boolean },
      kioskId: { type: Number },
      notes: { type: mongoose.Schema.Types.Mixed },
      openTime: { type: mongoose.Schema.Types.Mixed },
      publicText: { type: mongoose.Schema.Types.Mixed },
      timeZone: { type: mongoose.Schema.Types.Mixed },
      trikesAvailable: { type: Number },
      latitude: { type: Number },
      longitude: { type: Number },
    },
    type: { type: String },
  },
  { timestamps: true }
);

const IndegoDataModel = mongoose.model("indegoData", indegoDataSchema);

module.exports = { IndegoDataModel };
