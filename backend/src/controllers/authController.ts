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
            return res.status(400).json({ error: 'Email already in use' });
            
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

    public signin = async (req: Request, res: Response): Promise<any> => {
        try {
            const { email, password } = req.body;

        if (!email || !password) {
            
            return res.status(400).json({ error: 'Email and password are required' });
        }

        const user = await prisma.user.findUnique({
            where: {
                email
            }
        });

        if (!user) {
            
            return res.status(404).json({ error: 'User not found' });
        }

        const isPasswordValid = await this.authService.verifyPassword(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const token = this.authService.generateToken(user);

        return res.status(200).json({ token });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "An error occurred during sign-in." });    
        }
    }
}