import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { CandidateService } from "../services/candidateService";
import { z } from "zod";

const prisma = new PrismaClient();
const candidateService = new CandidateService();

const candidateSchema = z.object({
    name: z.string().min(1, "Name is required."),
    email: z.string().email("Invalid e-mail."),
    telephone: z.string().optional(),
    age: z.number().min(18, "Minimum age is 18.").optional(),
    wageExpectation: z.number().optional(),
    wageActual: z.number().optional(),
    lastCompany: z.string().optional(),
    seniority: z.enum(["Junior", "Mid", "Senior"]).optional(),
    gender: z.string().optional(),
    pcd: z.boolean().optional(),
  
    country: z.string().optional(),
    state: z.string().optional(),
    city: z.string().optional(),
    neighbourhood: z.string().optional(),
  
    begin: z.coerce.date().optional(),
    alocation: z.string().optional(),
    travel: z.boolean().optional(),
    availabilityOfChange: z.boolean().optional(),
  
    education: z.string().optional(),
    skills: z.array(z.string()).optional(),
    languages: z.array(z.string()).optional(),
  
    socials: z.string().optional(),
    weblink: z.string().optional(),
    cv: z.string().optional(),

    createdBy: z.string(),
    status: z.string()
  });

export class CandidateController {
    public async getAllCandidates(req: Request, res: Response): Promise<any> {
        try {
            const candidates = await candidateService.getAllCandidates(req);

            if (candidates.length === 0) {
                return res.status(204).send();
            }

            return res.status(200).json(candidates);
        } catch (error) {
            console.error(error);
            return res
                .status(500)
                .json({ error: "An error occurred while fetching candidates." });
        }
    }

    public async getCandidate(req: Request, res: Response): Promise<any> {
        try {
            const candidateId = req.params.id;


            if (!candidateId) {
                return res.status(400).json({ error: "Candidate ID is required" });
            }

            const candidate = await candidateService.getCandidate(candidateId);

            if (!candidate) {
                return res.status(404).json({ error: "Candidate not found" });
            }

            return res.status(200).json(candidate);
        } catch (error) {
            console.error("Error fetching candidate:", error);
            return res
                .status(500)
                .json({ error: "An error occurred while fetching the candidate." });
        }
    }

    public async createCandidate(
        req: Request,
        res: Response
    ): Promise<any> {
        try {

            const parsedData = candidateSchema.parse(req.body);

            const newCandidate = await candidateService.createCandidate({
                ...parsedData,
            });
            return res.status(201).json(newCandidate);
        } catch (error) {
            console.error(error);
            if (error instanceof z.ZodError) {
                return res.status(400).json({ error: error.errors });
            }
            return res
                .status(500)
                .json({ error: "An error occurred while creating the candidate." });
        }
    }

    public async updateCandidate(
        req: Request,
        res: Response
    ): Promise<any> {
        try {
            const candidateId = req.params.id;

            if (!candidateId) {
                return res.status(400).json({ error: "Candidate ID is required" });
            }

            const parsedData = candidateSchema.parse(req.body)

            const updatedCandidate = await candidateService.updateCandidate(
                candidateId,
                parsedData
            );

            return res.status(200).json(updatedCandidate);
        } catch (error) {
            console.error("Error:", error);
            if (error instanceof z.ZodError) {
                return res.status(400).json({ error: error.errors });
            }
            return res
                .status(500)
                .json({
                    error: "An error occurred while updating the candidate.",
                });
        }
    }

    public async deleteCandidate(
        req: Request,
        res: Response
    ): Promise<any> {
        try {
            const candidateId = req.params.id;

            if (!candidateId) {
                return res.status(400).json({ error: "Candidate ID is required" });
            }

            const deletedCandidate = await candidateService.deleteCandidate(
                candidateId
            );
            return res.status(200).json(deletedCandidate);
        } catch (error) {
            console.error("Error:", error);
            return res
                .status(500)
                .json({
                    error: "An error occurred while deleting the candidate.",
                });
        }
    }
}
