import { PrismaClient } from "@prisma/client";
import {Request, Response} from "express";
import { InterviewService } from "../services/interviewService";

const prisma = new PrismaClient()
const interviewService = new InterviewService()

export class InterviewController {

    public async getAllInterviews(req: Request, res: Response): Promise<any> {
        try {
            const interviews = await interviewService.getallInterviews()

            if (interviews.length === 0) {
                return res.status(204).send()
            }

            return res.status(200).json(interviews)
        } catch (error) {
            console.log(error)
            return res.status(500).json({ error: "An error occurred while fetching interviews." })
        }
    }
    public async getInterview(req: Request, res: Response): Promise<any> {
        try {
            const candidateId = req.params.id

            if (!candidateId) {
                return res.status(400).json({ error: "Candidate ID is required" })
            }

            const interviews = await interviewService.getInterviews(candidateId)

            if (interviews.length === 0) {
                return res.status(204).send()
            }

            return res.status(200).json(interviews)
        } catch (error) {
            console.error("Error fetching interviews:", error)
            return res.status(500).json({ error: "An error occurred while fetching interviews." })
        }
    }

    public async createInterview(req: Request, res: Response): Promise<any> {
        try {
            const interviewData = req.body

            const newInterview = await interviewService.createInterview(interviewData)
            return res.status(201).json(newInterview)
        } catch (error) {
            console.error(error)
            return res.status(500).json({ error: "An error occurred while creating an interview." })
        }
    }
}