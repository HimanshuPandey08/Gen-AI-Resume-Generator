const { Router } = require("express");
const authControllers = require("../controller/auth.contoller")
const authMiddleware = require("../middleware/auth.middleware")


const authRouter = Router();

authRouter.post("/register",authControllers.registerUserController )

authRouter.post("/login", authControllers.loginUserController)

authRouter.get("/logout", authControllers.logoutUserController )

authRouter.get("/get-me", authMiddleware.authUser , authControllers.getMeController )



module.exports = authRouter;