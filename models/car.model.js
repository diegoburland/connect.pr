const { Schema, model } = require("mongoose");

const CarSchema = Schema({
  customerId: {
    type: Number,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  make: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  plate: {
    type: String,
    required: true,
    unique: true,
  },
  vin: {
    type: String,
    required: true,
  },
});

module.exports = model("cars", CarSchema);
