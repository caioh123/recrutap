import { PrismaClient } from "@prisma/client";
import { Interview } from "../models/interview";
import { v4 as uuidv4 } from 'uuid';
export class InterviewService {
    private prisma: PrismaClient
    constructor() {
        this.prisma = new PrismaClient();
    }

    public getallInterviews = async () => {
        try {
            const interviews = await this.prisma.interview.findMany();
            return interviews;
        } catch (error) {
            console.log("error", error);
            throw new Error("An error occurred while finding all interviews.");
        }
    }

    public getInterviews = async (id: string) => {
        try {
            const interviews = await this.prisma.interview.findMany({
                where: {
                    candidateId: id
                }
            });
            return interviews;
        } catch (error) {
            console.log("error", error);
            throw new Error("An error occurred while finding all interviews.");
        }
    }

    public createInterview = async (data: Interview) => {
        try {
            const interview = await this.prisma.interview.create({
                data: {
                    ...data,
                    recruiter: data.interviewer || uuidv4(),
                    candidateId: data.candidateId,
                    jobId: data.jobId
                },
            });

            return interview;
        } catch (error) {
            console.log("error", error);
            throw new Error("An error occurred when creating a interview.");
        }
    }
}
