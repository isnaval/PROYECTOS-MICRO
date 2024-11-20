const express = require("express");
const { createUser, getUsers } = require("../controllers/user.controller");

const router = express.Router();

router.post("/create", createUser);
router.get("/", getUsers);

module.exports = router;
