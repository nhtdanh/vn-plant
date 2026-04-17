import { Router } from "express";
import * as authController from "./auth.controller.js";
import { validate } from "../../middlewares/validate.js";
import { registerSchema, loginSchema } from "./auth.dto.js";

const authRoutes = Router();

authRoutes.post("/register", validate({ body: registerSchema }), authController.register);
authRoutes.post("/login", validate({ body: loginSchema }), authController.login);
authRoutes.post("/refresh", authController.refresh);
authRoutes.post("/logout", authController.logout);

export { authRoutes };

