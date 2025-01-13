import express from "express";
import { CompanyController } from "../../controllers/companyController"; 
import { authorize } from "../../middlewares/authorization";

const router = express.Router();
const companyController = new CompanyController();

router.post("/", authorize(["admin", "manager", "recruiter"]), (req, res) =>
  companyController.createCompany(req, res)
);

router.delete("/:id", authorize(["admin", "recruiter"]), (req, res) =>
  companyController.deleteCompany(req, res)
);

router.get("/", (req, res) => companyController.getAllCompanies(req, res));
router.get("/:id", (req, res) => companyController.getCompany(req, res));
router.put("/:id", authorize(["admin", "manager", "recruiter"]), (req, res) => companyController.updateCompany(req, res));

export default router;
