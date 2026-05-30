import type { RegisterDTO } from "./dto/register.dto.js";
import { prisma } from "../../shared/database/prisma.js";
import bcrypt from "bcrypt"

export class AuthService {
    postLogin() {
        
    }
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
}