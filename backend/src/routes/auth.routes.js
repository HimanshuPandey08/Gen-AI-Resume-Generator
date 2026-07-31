const { Router } = require("express");
const authControllers = require("../controller/auth.contoller")


const authRoutes = Router();

authRoutes.post("/register",authControllers.registerUserController )

authRoutes.post("/login", authControllers.loginUserController)

module.exports = authRoutes;