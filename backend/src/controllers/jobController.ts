import e, { Request, Response } from "express";
import { JobService } from "../services/jobService";
import { z } from "zod";

const jobService = new JobService();

const jobSchema = z.object({
  title: z.string().min(3, "O título deve ter pelo menos 3 caracteres."),
  description: z.string().min(10, "A descrição deve ter pelo menos 10 caracteres."),
  location: z.string().optional(),
  seniority: z.enum(["Junior", "Mid", "Senior"], {
    errorMap: () => ({ message: "A senioridade deve ser Junior, Mid ou Senior." }),
  }),
  salary: z.number().positive("O salário deve ser um número positivo.").optional(),
  isRemote: z.boolean().optional(),
  companyId: z.string(), 
  education: z.string().optional(),
  skills: z.array(z.string()),
  pcd: z.boolean(),
  travel: z.boolean(),
  quantity: z.number().positive("A quantidade deve ser um número positivo."),
});

export class JobController {
  public async getAllJobs(req: Request, res: Response): Promise<any> {
    try {
      const getAllJobss = await jobService.getAlljobs(req);

      if (getAllJobss.length === 0) {
        return res.status(204).send();
      }

      return res.status(200).json(getAllJobss);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Ocorreu um erro ao buscar as vagas." });
    }
  }

  public async getJob(req: Request, res: Response): Promise<any> {
    try {
      const jobId = req.params.id;

      if (!jobId) {
        return res.status(400).json({ error: "Job ID is required" });
      }

      const job = await jobService.getJob(jobId);

      if (!job) {
        return res.status(404).json({ error: "Job not found" });
      }

      return res.status(200).json(job);
    } catch (error) {
      console.error("Error fetching job:", error);
      return res.status(500).json({ error: "Ocorreu um erro ao buscar a vaga." });
    }
  }

  public async createJob(req: Request, res: Response): Promise<any> {
    try {
        const parsedData = jobSchema.parse(req.body); 

        const newJob = await jobService.createJob({
            ...parsedData,
            salary: parsedData.salary,
        });

        return res.status(201).json(newJob);
    } catch (error) {
        console.error("Error creating job:", error);
        return res.status(500).json({ error: "Erro ao criar o job." });
    }
}


  public async updateJob(req: Request, res: Response): Promise<any> {
    try {
      const jobId = req.params.id;
      const parsedData = jobSchema.parse(req.body); 

      if (!jobId) {
        return res.status(400).json({ error: "Job ID is required" });
      }

      const updatedJob = await jobService.updateJob(jobId, parsedData);
      return res.status(200).json(updatedJob);
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ error: "An error occurred while updating the job" });
    }
  }

  public async deleteJob(req: Request, res: Response): Promise<any> {
    try {
      const jobId = req.params.id;

      if (!jobId) {
        return res.status(400).json({ error: "Job ID is required" });
      }

      const deletedJob = await jobService.deleteJob(jobId);
      return res.status(200).json(deletedJob);
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ error: "An error occurred while deleting the job" });
    }
  }
}
