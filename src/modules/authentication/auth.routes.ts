import { Router } from "express";
import { AuthController } from "./auth.controllers.js"; 
import { authAdminMiddleware, authMiddleware } from "../../shared/middlewares/auth.middleware.js";

export const authRoutes = Router();
const authController = new AuthController();

authRoutes.post('/register', authAdminMiddleware, authController.register);
authRoutes.post('/login', authController.login);

authRoutes.get('/me', authMiddleware, authController.me);



// authRoutes.post('/refresh', authController.refresh);
// authRoutes.post('/logout', authController.logout);
// authRoutes.post('/forgout-password', authController.forgoutPassword);
// authRoutes.post('/reset-password', authController.resetPassword);


authRoutes.get('/teste', authMiddleware, authAdminMiddleware, (req, res) => {
    res.send('ok');
})