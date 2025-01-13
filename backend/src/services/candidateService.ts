import { PrismaClient } from "@prisma/client";
import { Candidate } from "../models/candidate";

export class CandidateService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public getAllCandidates = async () => {
    try {
      const candidates = await this.prisma.candidate.findMany();
      return candidates;
    } catch (error) {
      console.log("error", error);
      throw new Error("An error occurred while finding all candidates.");
    }
  };

  public getCandidate = async (id: string) => {
    try {
      const candidate = await this.prisma.candidate.findUnique({
        where: {
          id,
        },
      });

      return candidate;
    } catch (error) {
      console.log("error", error);
      throw new Error("An error occurred while finding a candidate.");
    }
  };

  public createCandidate = async (data: Candidate) => {
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
