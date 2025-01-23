import {Request, Response} from 'express';
import { PrismaClient } from '@prisma/client';
import { AuthService } from '../services/authService';

const prisma = new PrismaClient();

export class AuthController {
    private authService: AuthService;

    constructor() {
        this.authService = new AuthService();
    }

    public signup = async (req: Request, res: Response): Promise<any> => {
        const { email, password, role, name, } = req.body;

        if (!email || !password) {
            res.status(400).json({ error: 'Email and password are required' });
            return;
        }

        const existingUser = await prisma.user.findUnique({
            where: {
                email
            }
        });

        if (existingUser) {
            res.status(400).json({ error: 'Email already in use' });
            return;
        }

        const hashedPassword = await this.authService.hashPassword(password);

        const newUser = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                name,
                role,
                createdAt: new Date(),
                updatedAt: new Date(),
                

            }
        });

        return res.status(201).json({ message: "User created successfully", user: newUser });
    }
}