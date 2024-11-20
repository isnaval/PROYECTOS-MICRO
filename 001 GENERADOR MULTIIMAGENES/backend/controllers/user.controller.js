const User = require("../database/user.schema");

// Crear un usuario
exports.createUser = async (req, res) => {
  try {
    const { username, email } = req.body;

    const user = await User.create({ username, email });
    res.status(201).json({ message: "User created successfully!", user });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Error creating user" });
  }
};

// Obtener todos los usuarios
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Error fetching users" });
  }
};
