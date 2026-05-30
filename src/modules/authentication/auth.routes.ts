import { Router } from "express";
import { AuthController } from "./auth.controllers.js"; 

export const authRoutes = Router();
const authController = new AuthController();

authRoutes.post('/register', authController.register);
authRoutes.post('/login', authController.login);
authRoutes.post('/refresh', authController.refresh);
authRoutes.post('/logout', authController.logout);
authRoutes.post('/forgout-password', authController.forgoutPassword);
authRoutes.post('/reset-password', authController.resetPassword);

authRoutes.get('/me', authController.me);