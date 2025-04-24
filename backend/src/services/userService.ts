import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

interface User {
    name: string;
    email: string;
    password: string;
    role: string;
    createdAt: Date;
    updatedAt: Date;
}

  

export class UserService {
    private prisma:PrismaClient

    constructor() {
        this.prisma = new PrismaClient()
    }

    public getAllUsers = async () => {
        return this.prisma.user.findMany();
    }

    public getMe = async (req: Request) => {
        if (!(req as any).user) {
            throw new Error("User not authenticated");
        }

        const user = this.prisma.user.findUnique({
            where: {id: (req as any).user.id},
            select: {
                id: true,
                email: true,
                name: true,
                role: true,
                createdAt: true,
                updatedAt: true
            }
        })


        return user
    }
}