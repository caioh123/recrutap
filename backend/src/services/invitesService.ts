import { PrismaClient } from "@prisma/client";
import { Invite } from "../models/invite";
import { v4 as uuidv4 } from "uuid";

export class InviteService {
    private prisma: PrismaClient

    constructor() {
        this.prisma = new PrismaClient();
    }


    public getAllInvites = async () => {
        try {
            const invites = await this.prisma.invites.findMany();
            return invites;
        } catch (error) {
            console.log("error", error);
            throw new Error("An error occurred while finding all invites.");
        }
    }

    public createInvite = async (email: string, role: string, createdBy: string) => {
        try {
            
            const token = uuidv4();


            const invite = await this.prisma.invites.create({
                data: {
                    email,
                    role,
                    token,
                    createdBy,
                    status: "pending",
                    used: false,

                },
            });

            return invite;
        } catch (error) {
            console.log("error", error);
            throw new Error("An error occurred when creating a invite.");
        }
    }


    public validateToken = async (token: string) => {
        try {
            console.log("token", token);

            const usedInvite = await this.prisma.invites.findUnique({
                where: {
                    token,
                },
                include: {createdByUser: {select: { name: true}}}
            });

            if (!usedInvite || usedInvite.used) {
                throw new Error("Invalid token");
            }


            return usedInvite;
        } catch (error) {
            console.log("error", error);
            throw new Error("An error occurred when updating invite.");
        }
    }

    public acceptInvite = async (token: string, userData: any) => {
        const invite = await this.validateToken(token)

        const newUser = await this.prisma.user.create({
            data: {
                email: userData.email,
                role: invite.role,
                name: userData.name,
                password: userData.password
            }
        })

        await this.prisma.invites.update({
            where: {token},
            data: {used: true, status: "accepted", updatedAt: new Date()}
        })

        return newUser
    }
}