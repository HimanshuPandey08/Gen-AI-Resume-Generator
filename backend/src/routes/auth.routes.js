const { Router } = require("express");
const authControllers = require("../controller/auth.contoller")
const authMiddleware = require("../middleware/auth.middleware")


const authRoutes = Router();

authRoutes.post("/register",authControllers.registerUserController )

authRoutes.post("/login", authControllers.loginUserController)

authRoutes.get("/logout", authControllers.logoutUserController )

authRoutes.get("/get-me", authMiddleware.authUser , authControllers.getMeController )



module.exports = authRoutes;