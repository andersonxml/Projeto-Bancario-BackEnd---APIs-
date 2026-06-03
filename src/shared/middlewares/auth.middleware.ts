import type { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

interface JWTPayload {
    sub: string;
    role: string;
}
interface AuthenticatedRequest extends Request {
    user?: JWTPayload;
}

export const authMiddleware = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: 'No token provided.' });

    const [, token] = authHeader.split(" ");
    try {
        const payload = jwt.verify(token!, process.env.JWT_KEY!) as JWTPayload;
        req.user = payload;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token.' });
    }
}