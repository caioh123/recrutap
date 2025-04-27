import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export class DashboardController {
    public async getDashboardData(req: Request, res: Response): Promise<any> {
        try {
            const [totalJobs, totalCandidates] = await Promise.all([
                prisma.job.count(),
                prisma.candidate.count(),

            ])

            const startOfToday = new Date();

            startOfToday.setHours(0, 0, 0, 0);
            const newCandidates = await prisma.candidate.count({
                where: { createdAt: { gte: startOfToday } }
            });

            const lastJobs = await prisma.job.findMany({
                orderBy: { createdAt: "desc" },
                select: {
                    id: true,
                    title: true,
                    createdAt: true,
                    priority: true,
                    creator: {
                        select: {
                            id: true,
                            name: true,
                            email: true
                        }
                    }
                },
                take: 5,

            })

            const lastCandidates = await prisma.candidate.findMany({
                orderBy: { createdAt: "desc" },
                select: { 
                    id: true,
                    createdAt: true,
                    name: true,
                    status: true,
                    creator: {
                        select: {
                            id: true,
                            name: true,
                            email: true
                        }
                    }

                 },
                take: 5
            })

            res.json({
                totals: { totalJobs, totalCandidates, newCandidates },
                lastJobs,
                lastCandidates

            })
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Failed to fetch dashboard." });
        }
    }
}