const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");

const imageRoutes = require("./routes/image.routes");

// Configuración de dotenv
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Conexión a MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Servir imágenes estáticas desde la carpeta uploads
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Rutas del backend
app.use("/api/images", imageRoutes);

// Ruta por defecto
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
