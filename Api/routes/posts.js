const express = require("express");
const {
  registerController,
  loginController,
  logoutController,
  refetchUserController,
} = require("../controllers/authController");
const router = express.Router();