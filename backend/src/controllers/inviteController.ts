import { PrismaClient } from "@prisma/client";
import {InviteService} from '../services/invitesService'
import {z} from 'zod'
import {Request, Response} from 'express'
import { v4 as uuidv4 } from "uuid";
const prisma = new PrismaClient();
const inviteService = new InviteService();

const inviteSchema = z.object({
    
    email: z.string().email("Invalid email."),
    role: z.string(),
});

export class InviteController {
    public async getAllInvites(req: Request, res: Response): Promise<any> {
        try {
            const invites = await inviteService.getAllInvites();

            if (invites.length === 0) {
                return res.status(204).json({ error: "No invites found" });
            }
            return res.status(200).json(invites);
        } catch (error) {
            console.error("Error:", error);
            return res
                .status(500)
                .json({
                    error: "An error occurred while fetching invites.",
                });
        }
    }

    public async createInvite(req: Request, res: Response): Promise<any> {
        try {
            const {email, role} = inviteSchema.parse(req.body);

            const emailExists = await prisma.invites.findFirst({
                where: {
                    email,
                },
            });

            if (emailExists) {
                return res.status(400).json({ error: "Email already invited." });
            }

            const createdBy = (req as any).user?.id;

            if (!createdBy) {
                return res.status(401).json({ error: "Unauthorized: User ID is missing." });
              }


            const newInvite = await inviteService.createInvite(email, role, createdBy);
            return res.status(201).json(newInvite);
        } catch (error) {
            console.error(error);
            if (error instanceof z.ZodError) {
                return res.status(400).json({ error: error.errors });
            }
            return res
                .status(500)
                .json({
                    error: "An error occurred while creating the invite.",
                });
        }
    }


    public async updateInvite(req: Request, res: Response): Promise<any> {
        try {
            const { token, status } = req.body;

            const updatedInvite = await inviteService.updateInvite(token, status);

            return res.status(200).json(updatedInvite);
        } catch (error) {
            console.error("Error:", error);
            return res
                .status(500)
                .json({
                    error: "An error occurred while updating the invite.",
                });
        }
    }

}