const mongoose = require("mongoose");

const VariationSchema = new mongoose.Schema({
  variationName: { type: String, required: true },
  notes: { type: String }, // Campo opcional para notas
  createdAt: { type: Date, default: Date.now },
});

const ImageSchema = new mongoose.Schema({
  originalName: { type: String, required: true },
  uploadedAt: { type: Date, default: Date.now },
  numVariations: { type: Number, required: true },
  variations: [VariationSchema], // Array de variaciones
});

module.exports = mongoose.model("Image", ImageSchema);
