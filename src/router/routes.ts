import { Router } from "express";
import { authRoutes } from "../modules/authentication/auth.routes.js";

export const router = Router();

// Authentication
router.use('/api/auth', authRoutes);