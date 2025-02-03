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


    public updateInvite = async (token: string, status: string) => {
        try {
            console.log("token", token);

            const usedInvite = await this.prisma.invites.findUnique({
                where: {
                    token,
                },
            });

            if (!usedInvite) {
                throw new Error("Invalid token");
            }

            if (usedInvite.used) {
                throw new Error("Invite already used");
            }
            const invite = await this.prisma.invites.update({
                where: {
                    token,
                },
                data: {
                    status,
                    used: true,
                },
            });

            return invite;
        } catch (error) {
            console.log("error", error);
            throw new Error("An error occurred when updating invite.");
        }
    }
}