/**
 * @file productoController.js
 * @description Controlador para las operaciones CRUD de productos.
 *
 * Este controlador permite realizar las siguientes operaciones sobre los productos:
 * - Buscar un producto específico mediante su ID.
 * - Eliminar un producto de la base de datos mediante su ID.
 * - (Opcional) Listar todos los productos disponibles.
 */

const ProductoModel = require("../models/producto");

// Buscar producto por ID
exports.getProductoById = async (req, res) => {
  try {
    const productoId = req.params.id; // ID del producto desde los parámetros de la solicitud
    const producto = await ProductoModel.getProductoById(productoId);
    if (!producto) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }
    res.json(producto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar producto por ID
exports.deleteProducto = async (req, res) => {
  try {
    const productoId = req.params.id; // ID del producto desde los parámetros de la solicitud
    await ProductoModel.deleteProducto(productoId);
    res.sendStatus(204); // Enviar respuesta exitosa sin contenido
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// (Opcional) Listar todos los productos
exports.getAllProductos = async (req, res) => {
  try {
    const productos = await ProductoModel.getAllProductos();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
