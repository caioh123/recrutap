import { PrismaClient } from "@prisma/client";
import { Job } from "../models/job";

export class JobService {
    private prisma: PrismaClient

    constructor () {
        this.prisma = new PrismaClient()
    }

    public getAllJobs = async () => {
        try {
            const jobs = await this.prisma.job.findMany({
                include: {
                }
            })

            return jobs
        } catch (error) {
            console.log("error", error)
            throw new Error('Ocorreu um erro ao procurar as vaga.');
        }
    }
}