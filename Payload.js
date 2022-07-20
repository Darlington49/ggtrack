mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PayloadSchema = mongoose.Schema(
  {
    message: {
      type: String,
    },
    topic: {
      type: String,
    },
    "Latitude": { type: String, },
    "Longitude": { type: String, },
    "Speed": { type: String, },
    "Altitude": { type: String, },
    "Visible Satellites": { type: String, },
    " Used Satellites": { type: String, },
    "Accuracy": { type: String, },
    "Year": { type: String, },
    "Month": { type: String, },
    "Day": { type: String, },
    "Hour": { type: String, },
    "Minute": { type: String, },
    "Second": { type: String, },
    "DeviceID": { type: String, }
  },
  { timestamps: true }
);

const Payload = mongoose.model("Payload", PayloadSchema);
module.exports = { Payload };
