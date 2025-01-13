import { PrismaClient } from "@prisma/client";

export class JobCandidateService {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    public async relateJobCandidate(jobId: string, candidateId: string) {
        try {
            const jobExists = await this.prisma.job.findUnique({
                where: { id: jobId }
            });

            if (!jobExists) {
                throw new Error("Job ID does not exist.");
            }

            const candidateExists = await this.prisma.candidate.findUnique({
                where: { id: candidateId }
            });

            if (!candidateExists) {
                throw new Error("Candidate ID does not exist.");
            }

            const relationExists = await this.prisma.jobCandidate.findUnique({
                where: {
                    jobId_candidateId: {
                        jobId: jobId,
                        candidateId: candidateId
                    }
                }
            });

            if (relationExists) {
                throw new Error("The relation between the job and candidate already exists.");
            }

            const jobCandidate = await this.prisma.jobCandidate.create({
                data: {
                    jobId: jobId,
                    candidateId: candidateId
                }
            });

            return jobCandidate;
        } catch (error) {
            console.log("error", error);
            throw new Error("An error occurred when relating a job and a candidate.");
        }
    }

    public async getCandidatesByJob(jobId: string) {
        try {
            const candidates = await this.prisma.jobCandidate.findMany({
                where: {
                    jobId: jobId,

                },
                include: {
                    candidate: true
                }
            });

            return candidates;
        } catch (error) {
            console.log("error", error);
            throw new Error("An error occurred while finding candidates by job.");
        }
    }

    public async getJobsByCandidate(candidateId: string) {
        try {
            const jobs = await this.prisma.jobCandidate.findMany({
                where: {
                    candidateId: candidateId
                },
                include: {
                    job: true
                }
            });

            return jobs;
        } catch (error) {
            console.log("error", error);
            throw new Error("An error occurred while finding jobs by candidate.");
        }
    }

    public async removeJobCandidate(jobId: string, candidateId: string) {
        try {
            const jobCandidate = await this.prisma.jobCandidate.delete({
                where: {
                    jobId_candidateId: {
                        jobId: jobId,
                        candidateId: candidateId
                    },
                }
            });

            return jobCandidate;
        } catch (error) {
            console.log("error", error);
            throw new Error("An error occurred when unrelating a job and a candidate.");
        }
    }


}

