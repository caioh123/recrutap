import { Request, Response } from "express";
import { CompanyService } from "../services/companyService";

const companyService = new CompanyService();

export class CompanyController {
  public async createCompany(req: Request, res: Response): Promise<any> {
    try {
      const data = req.body;
      const newCompany = await companyService.createCompany(data);
      return res.status(201).json(newCompany);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to create company." });
    }
  }

  public async deleteCompany(req: Request, res: Response): Promise<any> {
    try {
      const { id } = req.params;
      await companyService.deleteCompany(id);
      return res.status(204).send();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to delete company." });
    }
  }

  public async getAllCompanies(req: Request, res: Response): Promise<any> {
    try {
      const companies = await companyService.getAllCompanies();
      return res.status(200).json(companies);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to fetch companies." });
    }
  }

  public async getCompany(req: Request, res: Response): Promise<any> {
    try {
      const { id } = req.params;
      const company = await companyService.getCompany(id);
      if (!company) {
        return res.status(404).json({ error: "Company not found." });
      }
      return res.status(200).json(company);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to fetch company." });
    }
  }

  public async updateCompany(req: Request, res: Response): Promise<any> {
    try {
      const { id } = req.params;
      const data = req.body;
      const updatedCompany = await companyService.updateCompany(id, data);
      return res.status(200).json(updatedCompany);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to update company." });
    }
  }
}
