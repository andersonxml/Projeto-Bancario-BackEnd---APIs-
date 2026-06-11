import type { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export interface JWTPayload {
    sub: string;
    role: string;
}
interface AuthenticatedRequest extends Request {
    user?: JWTPayload;
}
// Middleware for identify if user is logged
export const authMiddleware = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: 'No token provided.' });

    const [, token] = authHeader.split(" ");
    try {
        req.user = jwt.verify(token!, process.env.JWT_KEY!) as JWTPayload;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'No permission.' });
    }
}

// Middleware for identify if user is admin
export const authAdminMiddleware = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    if (req.user?.role.toLowerCase() !== 'admin') return res.status(403).json({ message: 'No permission.' });
    next();
}