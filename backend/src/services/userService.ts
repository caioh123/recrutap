import { PrismaClient } from "@prisma/client";
import { Request } from "express";

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

    public getAllUsers = async (req: Request) => {
        const user = this.prisma.user.findMany()

        return user
    }
}