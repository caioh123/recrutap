import { PrismaClient } from "@prisma/client";
import { Candidate } from "../models/candidate";
import { Request } from "express";

interface Filter {
  seniority?: string;
  email?: string;
  city?: string;
  skills?: string | string[];
  wageExpectation?: number;
  availabilityOfChange?: boolean;
  jobId?: string;
  restricted?: boolean;
}

function parseQueryParams(query: any): Filter {
  return {
    seniority: query.seniority || undefined,
    email: query.email || undefined,
    city: query.city || undefined,
    skills: query.skills ? query.skills.split(',').map((skill: any) => skill.trim()) : undefined,
    wageExpectation: query.wageExpectation ? Number(query.wageExpectation) : undefined,
    availabilityOfChange: query.availabilityOfChange === 'true' ? true : query.availabilityOfChange === 'false' ? false : undefined,
    jobId: query.jobId || undefined,
    restricted: query.restricted === 'true' ? true : query.restricted === 'false' ? false : undefined,
  };
}

export class CandidateService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public getAllCandidates = async (req: Request) => {
    const filter = parseQueryParams(req.query);

    try {
      const filters: any = {};

      if (filter.seniority) {
        filters.seniority = { startsWith: filter.seniority };
      }

      if (filter.email) {
        filters.email = { equals: filter.email };
      }

      if (filter.city) {
        filters.city = { equals: filter.city };
      }

      if (filter.skills) {
        filters.skills = { hasSome: filter.skills };
      }

      if (filter.wageExpectation !== undefined) {
        filters.wageExpectation = { lte: filter.wageExpectation };
      }

      if (filter.availabilityOfChange !== undefined) {
        filters.availabilityOfChange = { equals: filter.availabilityOfChange };
      }

      if (filter.restricted !== undefined) {
        filters.restricted = { equals: filter.restricted };
      }


      if (filter.jobId) {
        const candidates = await this.prisma.candidate.findMany({
          where: {
            ...filters,
            JobCandidate: {
              some: {
                jobId: filter.jobId,
              },
            },

          },
          include: {
            creator: {
              select: {
                name: true
              }
            }
          }
        });
        return candidates;
      }


      const candidates = await this.prisma.candidate.findMany({
        where: filters,

        include: {
          creator: {
            select: {
              name: true
            }
          }
        }
      });

      console.log("Filtered Candidates:", candidates);
      return candidates;
    } catch (error) {
      console.error("Error fetching candidates:", error);
      throw new Error("An error occurred while finding all candidates.");
    }
  };


  public getCandidate = async (id: string) => {
    try {
      const candidate = await this.prisma.candidate.findUnique({
        where: {
          id,
        },
        include: {
          JobCandidate: true
        }
      });

      return candidate;
    } catch (error) {
      console.log("error", error);
      throw new Error("An error occurred while finding a candidate.");
    }
  };

  public createCandidate = async (data: Candidate) => {
    console.log(data, "data")
    try {
      const candidate = await this.prisma.candidate.create({
        data: {
          ...data,
        },
      });

      return candidate;
    } catch (error) {
      console.log("error", error);
      throw new Error("An error occurred when creating a candidate.");
    }
  };

  public updateCandidate = async (id: string, data: Candidate) => {
    try {
      const candidate = await this.prisma.candidate.update({
        where: {
          id,
        },
        data,
      });

      return candidate;
    } catch (error) {
      console.log("error", error);
      throw new Error("An error occurred when updating a candidate.");
    }
  };

  public deleteCandidate = async (id: string) => {
    try {
      const candidate = await this.prisma.candidate.delete({
        where: {
          id,
        },
      });

      return candidate;
    } catch (error) {
      console.log("error", error);
      throw new Error("An error occurred when deleting a candidate.");
    }
  };
}
