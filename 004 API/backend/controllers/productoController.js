/**
 * @file ventaController.js
 * @description Controlador para las operaciones CRUD de ventas.
 *
 * Este controlador permite realizar las siguientes operaciones sobre las ventas:
 * - Crear una nueva venta.
 * - Obtener todas las ventas o una venta específica mediante su ID.
 * - Actualizar la información de una venta existente.
 * - Eliminar una venta de la base de datos.
 */

const VentaModel = require("../models/venta");

// Obtener todas las ventas
exports.getAllVentas = async (req, res) => {
  try {
    const ventas = await VentaModel.getAllVentas(); // Obtener todas las ventas de la base de datos
    res.json(ventas);
  } catch (error) {
    console.error("Error al obtener ventas:", error);
    res.status(500).json({
      error: "Error al obtener las ventas",
      details: error.message,
    });
  }
};

// Buscar venta por ID
exports.getVentaById = async (req, res) => {
  try {
    const ventaId = req.params.id;

    // Validación del ID
    if (!ventaId) {
      return res.status(400).json({ error: "ID de venta requerido" });
    }

    const venta = await VentaModel.getVentaById(ventaId); // Obtener venta por ID

    if (!venta) {
      return res.status(404).json({ error: "Venta no encontrada" });
    }

    res.json(venta);
  } catch (error) {
    console.error("Error al obtener venta por ID:", error);
    res.status(500).json({
      error: "Error al obtener la venta",
      details: error.message,
    });
  }
};

// Crear una nueva venta
exports.createVenta = async (req, res) => {
  try {
    const {
      id_cliente,
      id_producto,
      fecha_pedido,
      unidades,
      importe_venta_total,
      importe_coste_total,
    } = req.body;

    // Validación de campos requeridos
    if (!id_cliente || !id_producto || !fecha_pedido || !unidades) {
      return res.status(400).json({
        error: "Todos los campos son requeridos",
        requiredFields: [
          "id_cliente",
          "id_producto",
          "fecha_pedido",
          "unidades",
        ],
      });
    }

    // Validación de valores numéricos
    if (
      isNaN(unidades) ||
      isNaN(importe_venta_total) ||
      isNaN(importe_coste_total)
    ) {
      return res.status(400).json({
        error:
          "Las unidades, importes de venta y costes deben ser valores numéricos",
      });
    }

    const nuevaVenta = await VentaModel.createVenta(
      id_cliente,
      id_producto,
      fecha_pedido,
      unidades,
      importe_venta_total,
      importe_coste_total
    );

    res.status(201).json({
      message: "Venta creada exitosamente",
      venta: nuevaVenta,
    });
  } catch (error) {
    console.error("Error al crear venta:", error);
    res.status(500).json({
      error: "Error al crear la venta",
      details: error.message,
    });
  }
};

// Actualizar una venta existente
exports.updateVenta = async (req, res) => {
  try {
    const ventaId = req.params.id;
    const {
      id_cliente,
      id_producto,
      fecha_pedido,
      unidades,
      importe_venta_total,
      importe_coste_total,
    } = req.body;

    // Validación del ID
    if (!ventaId) {
      return res.status(400).json({ error: "ID de venta requerido" });
    }

    const ventaExistente = await VentaModel.getVentaById(ventaId); // Verificar existencia
    if (!ventaExistente) {
      return res.status(404).json({ error: "Venta no encontrada" });
    }

    // Validación de valores numéricos si se proporcionan
    if (
      (unidades && isNaN(unidades)) ||
      (importe_venta_total && isNaN(importe_venta_total)) ||
      (importe_coste_total && isNaN(importe_coste_total))
    ) {
      return res.status(400).json({
        error:
          "Las unidades, importes de venta y costes deben ser valores numéricos",
      });
    }

    const ventaActualizada = await VentaModel.updateVenta(ventaId, {
      id_cliente: id_cliente || ventaExistente.id_cliente,
      id_producto: id_producto || ventaExistente.id_producto,
      fecha_pedido: fecha_pedido || ventaExistente.fecha_pedido,
      unidades: unidades || ventaExistente.unidades,
      importe_venta_total:
        importe_venta_total || ventaExistente.importe_venta_total,
      importe_coste_total:
        importe_coste_total || ventaExistente.importe_coste_total,
    });

    res.json({
      message: "Venta actualizada exitosamente",
      venta: ventaActualizada,
    });
  } catch (error) {
    console.error("Error al actualizar venta:", error);
    res.status(500).json({
      error: "Error al actualizar la venta",
      details: error.message,
    });
  }
};

// Eliminar venta por ID
exports.deleteVenta = async (req, res) => {
  try {
    const ventaId = req.params.id;

    // Validación del ID
    if (!ventaId) {
      return res.status(400).json({ error: "ID de venta requerido" });
    }

    const ventaExistente = await VentaModel.getVentaById(ventaId); // Verificar existencia
    if (!ventaExistente) {
      return res.status(404).json({ error: "Venta no encontrada" });
    }

    await VentaModel.deleteVenta(ventaId); // Eliminar venta

    res.status(200).json({
      message: "Venta eliminada exitosamente",
      deletedId: ventaId,
    });
  } catch (error) {
    console.error("Error al eliminar venta:", error);
    res.status(500).json({
      error: "Error al eliminar la venta",
      details: error.message,
    });
  }
};
