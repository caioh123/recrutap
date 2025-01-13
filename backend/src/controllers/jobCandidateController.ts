import { Request, Response } from "express";
import { JobCandidateService } from "../services/jobCandidateService";

const jobCandidateService = new JobCandidateService();

export class JobCandidateController {
  public async relateCandidateToJob(req: Request, res: Response): Promise<any> {
    try {
      const { jobId, candidateId } = req.body;

      if (!candidateId || !jobId) {
        return res.status(400).json({ error: "Candidate ID and Job ID are required" });
      }

      const relation = await jobCandidateService.relateJobCandidate(jobId, candidateId);
      return res.status(201).json(relation);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "An error occurred while relating the candidate to the job." });
    }
  }

  public async getCandidatesByJob(req: Request, res: Response): Promise<any> {
    try {
      const { jobId } = req.params;

      if (!jobId) {
        return res.status(400).json({ error: "Job ID is required" });
      }

      const candidates = await jobCandidateService.getCandidatesByJob(jobId);
      return res.status(200).json(candidates);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "An error occurred while fetching candidates for the job." });
    }
  }

  public async getJobsByCandidate(req: Request, res: Response): Promise<any> {
    try {
      const { candidateId } = req.params;

      if (!candidateId) {
        return res.status(400).json({ error: "Candidate ID is required" });
      }

      const jobs = await jobCandidateService.getJobsByCandidate(candidateId);
      return res.status(200).json(jobs);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "An error occurred while fetching jobs for the candidate." });
    }
  }

  public async removeJobCandidate(req: Request, res: Response): Promise<any> {
    try {
      const { jobId, candidateId } = req.params;

      if (!jobId || !candidateId) {
        return res.status(400).json({ error: "Job ID and Candidate ID are required" });
      }

      await jobCandidateService.removeJobCandidate(jobId, candidateId);
      return res.status(204).json();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "An error occurred while removing the job candidate relation." });
    }
  }
}
