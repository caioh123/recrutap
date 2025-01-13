import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { CandidateService } from "../services/candidateService";

const prisma = new PrismaClient();
const candidateService = new CandidateService();

export class CandidateController {
    public async getAllCandidates(req: Request, res: Response): Promise<any> {
        try {
            const candidates = await candidateService.getAllCandidates();

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
            const candidateData = req.body;

            const newCandidate = await candidateService.createCandidate(candidateData);
            return res.status(201).json(newCandidate);
        } catch (error) {
            console.error(error);
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
            const candidateData = req.body;

            if (!candidateId) {
                return res.status(400).json({ error: "Candidate ID is required" });
            }

            const updatedCandidate = await candidateService.updateCandidate(
                candidateId,
                candidateData
            );

            return res.status(200).json(updatedCandidate);
        } catch (error) {
            console.error("Error:", error);
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
