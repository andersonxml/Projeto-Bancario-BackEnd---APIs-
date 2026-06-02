import type { RegisterDTO, LoginDTO } from "./dto/auth.dto.js";
import jwt from "jsonwebtoken";
import { prisma } from "../../shared/database/prisma.js";
import bcrypt from "bcrypt"

export class AuthService {
    async postRegister(data: RegisterDTO) {
        const hash = await bcrypt.hash(data.password, 10);

        const userExists = await prisma.users.findUnique({
            where: {
                email: data.email
            }
        })
        if (userExists) throw new Error("E-mail already registered")

        const result = await prisma.users.create({
            data: {
                name: data.name,
                email: data.email,
                password: hash,
            }
        })

        return {
            id: result.public_id,
            name: result.name,
            email: result.email,
            role: result.role,
        }
    }
    async postLogin(data: LoginDTO) {
        const userExists = await prisma.users.findUnique({
            where: {
                email: data.email
            }
        })
        if (!userExists) throw new Error("E-mail not already registered")

        const verifyPassword = await bcrypt.compare(data.password, userExists.password)
        if (!verifyPassword) throw new Error("Credencials invalids")

        const accessToken = jwt.sign({ id: userExists.public_id}, process.env.JWT_KEY!, {expiresIn: "1d"});
        
        return {
            message: 'Logged in with success.',
            accessToken: accessToken
        }
    }

}