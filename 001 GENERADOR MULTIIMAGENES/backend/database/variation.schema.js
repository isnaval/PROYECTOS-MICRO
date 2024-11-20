const mongoose = require("mongoose");

const VariationSchema = new mongoose.Schema({
  variationName: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Variation", VariationSchema);
