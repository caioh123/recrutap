import express from "express";
import { CompanyController } from "../../controllers/companyController"; 
import { authMiddleware } from "../../middlewares/authorization";

const router = express.Router();
const companyController = new CompanyController();

router.post("/", authMiddleware(["admin", "manager", "recruiter"]), (req, res) =>
  companyController.createCompany(req, res)
);

router.delete("/:id", authMiddleware(["admin", "recruiter"]), (req, res) =>
  companyController.deleteCompany(req, res)
);

router.get("/", (req, res) => companyController.getAllCompanies(req, res));
router.get("/:id", (req, res) => companyController.getCompany(req, res));
router.put("/:id", authMiddleware(["admin", "manager", "recruiter"]), (req, res) => companyController.updateCompany(req, res));

export default router;
