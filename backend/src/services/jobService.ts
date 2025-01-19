import { PrismaClient } from "@prisma/client";
import { Job } from "../models/job";
import { Request } from "express";

interface Filter {
    city?: string;
    seniority?: string;
    salary?: number;
    companyId?: string;
    language?: string;
    education?: string;
}

function parseQueryParams(query: any): Filter {
    return {
        city: query.city || undefined,
        seniority: query.seniority || undefined,
        salary: query.salary ? Number(query.salary) : undefined,
        companyId: query.companyId || undefined,
        education: query.education || undefined,
    }
}

export class JobService {
    private prisma: PrismaClient

    constructor() {
        this.prisma = new PrismaClient()
    }
    public getAlljobs = async (req: Request) => {

        const filter = parseQueryParams(req.query);

        try {
            const filters: any = {};



            if (filter.city) {
                filters.city = { contains: filter.city };
            }

            if (filter.seniority) {
                filters.seniority = { contains: filter.seniority };
            }

            if (filter.salary) {
                filters.salary = { lte: filter.salary };
            }

            if (filter.companyId) {
                filters.companyId = { equals: filter.companyId };
            }

            if (filter.education) {
                filters.education = { equals: filter.education };
            }

            const jobs = await this.prisma.job.findMany({
                where: {
                    ...filters
                }
            })

            return jobs
        } catch (error) {
            console.log("error", error)
            throw new Error('An error occured while fetching jobs.');
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

    public updateJob = async (id: string, data: Job) => {
        try {
            const job = await this.prisma.job.update({
                where: { id },
                data
            })

            return job
        } catch (error) {
            console.log("error", error)
            throw new Error('An error occured when updating a job.');
        }
    }

    public deleteJob = async (id: string) => {
        try {
            const job = await this.prisma.job.delete({
                where: { id }
            })

            return job
        } catch (error) {
            console.log("error", error)
            throw new Error('An error occured when deleting a job.');
        }
    }
}