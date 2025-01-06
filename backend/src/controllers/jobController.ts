import { PrismaClient } from "@prisma/client";
import {Request, Response} from "express"
import { JobService } from "../services/jobService";
const prisma = new PrismaClient()

const vacancyService = new JobService()

export class JobController {
    public async getAllJobs(req: Request, res: Response): Promise<void> {
        try {
          const jobs = await prisma.job.findMany();
          res.status(200).json({jobs, message: "asdasd"});
        } catch (error) {
            console.log(error)
          res.status(500).json({ error: 'Ocorreu um erro ao buscar as vagas.' });
        }
      }

      public async createJob(req: Request, res: Response): Promise<void> {
        try {
          const {
            title,
            description,
            companyId,
            skills,
            education,
            languages,
            pcd,
            country,
            state,
            city,
            neighbourhood,
            alocation,
            travel,
            duration,
            quantity,
            jobOwner,
            priority,
            status,
            internalNotes,
            salary,
          } = req.body;
    
          const newJob = await prisma.job.create({
            data: {
              title,
              description,
              companyId,
              skills,
              education,
              languages,
              pcd,
              country,
              state,
              city,
              neighbourhood,
              alocation,
              travel,
              duration,
              quantity,
              jobOwner,
              priority,
              status,
              internalNotes,
              salary,
            },
          });
    
          res.status(201).json(newJob);
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: "Erro ao criar o job." });
        }}
}