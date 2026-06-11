import { AuthService } from "./auth.service.js";
import type { Response, Request } from "express";
import { z } from 'zod'
import jwt from 'jsonwebtoken'
import type { JWTPayload } from "../../shared/middlewares/auth.middleware.js";

const LoginModel = z.object({
    email: z.string().email(),
    password: z.string().min(8),
})
const RegisterModel = LoginModel.extend({
    name: z.string().min(3),
})

export class AuthController {
    constructor(
        private authService = new AuthService()
    ) { }

    register = async (req: Request, res: Response) => {
        try {
            const body = RegisterModel.safeParse(req.body);
            if (!body.success) return res.status(400).json({ message: 'Check the fields.' })
            const result = await this.authService.postRegister(body.data);

            res.send(result);
        } catch (error: any) {
            return res.status(400).json({
                message: error.message
            })
        }
    }
    login = async (req: Request, res: Response) => {
        try {
            const body = LoginModel.safeParse(req.body);

            if (!body.success) return res.status(400).json({ message: 'Check the fields.' })
            const result = await this.authService.postLogin(body.data);

            res.send(result);
        } catch (error: any) {
            return res.status(400).json({
                message: error.message
            })
        }
    }
    refresh = async (req: Request, res: Response) => { }
    logout = async (req: Request, res: Response) => { }
    forgoutPassword = async (req: Request, res: Response) => { }
    resetPassword = async (req: Request, res: Response) => { }
    me = async (req: Request, res: Response) => {
        try {
            const authorizationToken = req.headers.authorization;
            if(!authorizationToken) return res.status(400).json({ message: 'Check the request'})
            
            const [, token] = authorizationToken?.split(" ");
            const user = jwt.verify(token!, process.env.JWT_KEY!) as JWTPayload;
            
            console.log(user.sub);
            
            const result = await this.authService.getMe({sub: user.sub});
            
            res.send(result)
        } catch (error: any) {
            return res.status(400).json({
                message: error.message
            })
        }
    }
}