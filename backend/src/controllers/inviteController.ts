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

    public async validateToken(req: Request, res: Response):Promise<any> {
        try {
            const {token} = req.params;
            const invite = await inviteService.validateToken(token)

            return res
                .status(200)
                .json({
                    valid: true,
                    invite: {
                        email: invite.email,
                        role: invite.role,
                        invitedBy: invite.createdByUser?.name
                    }
                })
        } catch (error) {
            return res.status(400).json({ valid: false, error: "Invalid or expired token" });
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


    public async acceptInvite(req: Request, res: Response):Promise<any> {
        try {
            const { token, userData } = req.body; 
            const newUser = await inviteService.acceptInvite(token, userData);
            
            return res.status(200).json(newUser);
          } catch (error: any) {
            return res.status(400).json({ error: error.message });
          }
        
    }

}