import express from "express";
import { CompanyController } from "../../controllers/companyController"; 
import { authMiddleware } from "../../middlewares/authorization";

const router = express.Router();
const companyController = new CompanyController();

router.post("/", (req, res, next) => authMiddleware(["admin","recruiter"])(req as any, res, next), (req, res) =>
  companyController.createCompany(req, res)
);

router.delete("/:id", (req, res, next) => authMiddleware(["admin"])(req as any, res, next), (req, res) =>
  companyController.deleteCompany(req, res)
);

router.get("/",(req, res, next) => authMiddleware(["admin","recruiter"])(req as any, res, next), (req, res) => companyController.getAllCompanies(req, res));
router.get("/:id", (req, res, next) => authMiddleware(["admin","recruiter"])(req as any, res, next),(req, res) => companyController.getCompany(req, res));
router.put("/:id", (req, res, next) => authMiddleware(["admin"])(req as any, res, next), (req, res) => companyController.updateCompany(req, res));

export default router;
