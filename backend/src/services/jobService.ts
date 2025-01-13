import { PrismaClient } from "@prisma/client";
import { Job } from "../models/job";

export class JobService {
    private prisma: PrismaClient

    constructor() {
        this.prisma = new PrismaClient()
    }
    public getAlljobs = async () => {
        try {
            const jobs = await this.prisma.job.findMany();

            return jobs
        } catch (error) {
            console.log("error", error)
            throw new Error('An error occured while finding all jobs.');
        }
    }

    public getJob = async (id: string) => {
        try {
            const job = await this.prisma.job.findUnique({
                where: {
                    id
                }
            })

            return job
        } catch (error) {
            console.log("error", error)
            throw new Error('An error occured while finding a job.');
        }
    }

    public createJob = async (data: Job) => {
        try {
            const job = await this.prisma.job.create({
                data: {
                    ...data
                }
            })

            return job
        } catch (error) {
            console.log("error", error)
            throw new Error('An error occured when creating a job.');
        }
    }

    public updateJob = async (id: string, data:Job) => {
        try {
            const job = await this.prisma.job.update({
                where: {id},
                data
            })

            return job
        } catch (error) {
            console.log("error", error)
            throw new Error('An error occured when updating a job.');
        }
    }

    public deleteJob = async(id: string) => {
        try {
            const job = await this.prisma.job.delete({
                where: {id}
            })

            return job
        } catch (error) {
            console.log("error", error)
            throw new Error('An error occured when deleting a job.');
        }
    }
}