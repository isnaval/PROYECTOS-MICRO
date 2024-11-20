const path = require("path");

// Servir archivos estáticos del frontend
app.use(express.static(path.join(__dirname, "../frontend")));

// Ruta base para servir el archivo `index.html`
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});
