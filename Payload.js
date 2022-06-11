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
  },
  { timestamps: true }
);

const Payload = mongoose.model("Payload", PayloadSchema);
module.exports = { Payload };
