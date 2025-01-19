import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { CandidateService } from "../services/candidateService";
import { z } from "zod";

const prisma = new PrismaClient();
const candidateService = new CandidateService();

const candidateSchema = z.object({
    name: z.string().regex(/^[A-Za-z\s]+$/, "O nome deve conter apenas letras e espaços."),
    email: z.string().email("E-mail inválido."),
    age: z.number().min(18, "A idade mínima é 18 anos."),
    seniority: z.enum(["Junior", "Mid", "Senior"]).refine((val) => ["Junior", "Pleno", "Senior"].includes(val), {
        message: "The seniority must be either Junior, Mid or Senior level.",
    }),
    skills: z.array(z.string()).optional(),
    restricted: z.boolean().optional(),
    observation: z.string().optional(),
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
                .json({ error: "Ocorreu um erro ao buscar os candidatos." });
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
                .json({ error: "Ocorreu um erro ao buscar o candidato." });
        }
    }

    public async createCandidate(
        req: Request,
        res: Response
    ): Promise<any> {
        try {

            const parsedData = candidateSchema.parse(req.body);

            const newCandidate = await candidateService.createCandidate(parsedData);
            return res.status(201).json(newCandidate);
        } catch (error) {
            console.error(error);
            if (error instanceof z.ZodError) {
                return res.status(400).json({ error: error.errors });
            }
            return res
                .status(500)
                .json({ error: "Erro ao criar o candidato." });
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
