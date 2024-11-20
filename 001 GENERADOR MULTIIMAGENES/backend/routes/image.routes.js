const express = require("express");
const {
  getImages,
  uploadImage,
  getImageVariations,
  getImagesByFilter,
} = require("../controllers/image.controller");
const multer = require("multer");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

// Rutas para imágenes
router.get("/", getImages); // Obtener todas las imágenes
router.post("/upload", upload.single("image"), uploadImage); // Subir una imagen
router.get("/:imageId/variations", getImageVariations); // Variaciones específicas
router.get("/filter", getImagesByFilter); // Filtrar imágenes por criterios

module.exports = router;
