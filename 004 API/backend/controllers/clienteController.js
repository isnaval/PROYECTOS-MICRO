/**
 * @file clienteController.js
 * @description Controlador para las operaciones CRUD de clientes.
 *
 * Este controlador permite realizar las siguientes operaciones sobre los clientes:
 * - Crear un nuevo cliente.
 * - Obtener todos los clientes o un cliente específico mediante su ID.
 * - Actualizar la información de un cliente existente.
 * - Eliminar un cliente de la base de datos.
 */

const ClienteModel = require("../models/cliente");

exports.getAllClientes = async (req, res) => {
  try {
    // Llama al modelo para obtener todos los clientes desde la base de datos
    const clientes = await ClienteModel.getAllClientes();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getClienteById = async (req, res) => {
  try {
    const clienteId = req.params.id;
    // Llama al modelo para obtener un cliente por su ID desde la base de datos
    const cliente = await ClienteModel.getClienteById(clienteId);
    if (!cliente) {
      return res.status(404).json({ error: "Cliente no encontrado" });
    }
    res.json(cliente);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createCliente = async (req, res) => {
  try {
    const { id_cliente, zona, pais } = req.body;
    // Llama al modelo para crear un nuevo cliente en la base de datos
    const nuevoCliente = await ClienteModel.createCliente(
      id_cliente,
      zona,
      pais
    );
    res.status(201).json(nuevoCliente);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateCliente = async (req, res) => {
  try {
    const clienteId = req.params.id;
    const { zona, pais } = req.body;
    // Llama al modelo para actualizar el cliente en la base de datos
    const clienteActualizado = await ClienteModel.updateCliente(
      clienteId,
      zona,
      pais
    );
    res.json(clienteActualizado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteCliente = async (req, res) => {
  try {
    const clienteId = req.params.id;
    // Llama al modelo para eliminar el cliente de la base de datos
    await ClienteModel.deleteCliente(clienteId);
    res.sendStatus(204); // Responde con un código 204 (No Content) si se elimina con éxito
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
