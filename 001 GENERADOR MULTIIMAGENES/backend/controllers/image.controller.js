const Image = require("../database/image.schema");

// Obtener todas las imágenes
exports.getImages = async (req, res) => {
  try {
    const images = await Image.find();
    res.status(200).json(images);
  } catch (error) {
    console.error("Error fetching images:", error);
    res.status(500).json({ error: "Error fetching images" });
  }
};

// Subir una imagen
exports.uploadImage = async (req, res) => {
  try {
    const { numVariations, note } = req.body;
    const maxVariations = Math.min(parseInt(numVariations), 50); // Limitar a un máximo de 50 variaciones
    const variations = [];

    for (let i = 0; i < maxVariations; i++) {
      variations.push({
        variationName: `Variation_${i + 1}`,
        notes: note || "Generated automatically",
        createdAt: new Date(),
      });
    }

    const imageDocument = {
      originalName: req.file.originalname,
      uploadedAt: new Date(),
      numVariations: maxVariations,
      variations,
    };

    const result = await Image.create(imageDocument);

    res.status(201).json({
      message: "Image uploaded and variations created!",
      id: result._id,
    });
  } catch (error) {
    console.error("Error uploading image:", error);
    res.status(500).json({ error: "Error uploading image" });
  }
};

// Consultar variaciones de una imagen específica
exports.getImageVariations = async (req, res) => {
  try {
    const { imageId } = req.params;

    const image = await Image.findById(imageId);
    if (!image) {
      return res.status(404).json({ error: "Image not found" });
    }

    res.status(200).json(image.variations);
  } catch (error) {
    console.error("Error fetching variations:", error);
    res.status(500).json({ error: "Error fetching variations" });
  }
};

// Filtrar imágenes por criterio
exports.getImagesByFilter = async (req, res) => {
  try {
    const { filterBy, filterValue } = req.query;

    let query = {};
    if (filterBy === "date") query.uploadedAt = { $gte: new Date(filterValue) };
    else if (filterBy === "note")
      query["variations.notes"] = { $regex: filterValue, $options: "i" };
    else if (filterBy === "name")
      query.originalName = { $regex: filterValue, $options: "i" };

    const images = await Image.find(query);
    res.status(200).json(images);
  } catch (error) {
    console.error("Error filtering images:", error);
    res.status(500).json({ error: "Error filtering images" });
  }
};
