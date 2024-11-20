// const sequelize = require("../config/database");

// exports.crossQuery = async (req, res) => {
//   try {
//     const { zona, pais, id_cliente, id_producto } = req.body;

//     // Crear una consulta SQL básica con filtros
//     const query = `
//       SELECT clientes.id_cliente, clientes.zona, clientes.pais, productos.id_producto, ventas.fecha_pedido
//       FROM clientes
//       INNER JOIN ventas ON clientes.id_cliente = ventas.id_cliente
//       INNER JOIN productos ON ventas.id_producto = productos.id_producto
//       WHERE (:zona IS NULL OR clientes.zona = :zona)
//       AND (:pais IS NULL OR clientes.pais = :pais)
//       AND (:id_cliente IS NULL OR clientes.id_cliente = :id_cliente)
//       AND (:id_producto IS NULL OR productos.id_producto = :id_producto)
//     `;

//     // Ejecutar la consulta con parámetros
//     const [results] = await sequelize.query(query, {
//       replacements: { zona, pais, id_cliente, id_producto },
//     });

//     res.json(results);
//   } catch (error) {
//     console.error("Error en la consulta cruzada:", error.message);
//     res.status(500).json({ error: "Error al realizar la consulta cruzada" });
//   }
// };
