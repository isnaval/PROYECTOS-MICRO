/**
 * @file producto.js
 * @description Modelo de datos para la entidad Producto con validaciones y métodos mejorados.
 */

const { DataTypes, Op } = require("sequelize");
const { sequelize } = require("../config/database");

const Producto = sequelize.define(
  "Producto",
  {
    id_producto: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tipo: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "El tipo de producto no puede estar vacío",
        },
        len: {
          args: [2, 100],
          msg: "El tipo debe tener entre 2 y 100 caracteres",
        },
      },
    },
    precio_unitario: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        isDecimal: {
          msg: "El precio debe ser un número decimal válido",
        },
        min: {
          args: [0],
          msg: "El precio no puede ser negativo",
        },
      },
    },
    coste_unitario: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        isDecimal: {
          msg: "El coste debe ser un número decimal válido",
        },
        min: {
          args: [0],
          msg: "El coste no puede ser negativo",
        },
      },
    },
    estado: {
      type: DataTypes.ENUM("activo", "inactivo"),
      defaultValue: "activo",
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        min: {
          args: [0],
          msg: "El stock no puede ser negativo",
        },
      },
    },
  },
  {
    tableName: "productos",
    timestamps: false,
    freezeTableName: true,
    underscored: true,
  }
);

// Métodos estáticos para operaciones CRUD
Producto.getAllProductos = async (filter = {}) => {
  return await Producto.findAll({
    where: filter,
    order: [["id_producto", "DESC"]],
  });
};

Producto.getProductoById = async (id) => {
  const producto = await Producto.findByPk(id);
  if (!producto) {
    throw new Error(`Producto con ID ${id} no encontrado`);
  }
  return producto;
};

Producto.createProducto = async (data) => {
  if (data.precio_unitario < data.coste_unitario) {
    throw new Error(
      "El precio unitario no puede ser menor que el coste unitario"
    );
  }
  return await Producto.create(data);
};

Producto.updateProducto = async (id, data) => {
  const producto = await Producto.getProductoById(id);
  if (
    data.precio_unitario &&
    data.coste_unitario &&
    data.precio_unitario < data.coste_unitario
  ) {
    throw new Error(
      "El precio unitario no puede ser menor que el coste unitario"
    );
  }
  return await producto.update(data);
};

Producto.deleteProducto = async (id) => {
  const producto = await Producto.getProductoById(id);
  return await producto.update({ estado: "inactivo" });
};

module.exports = Producto;
