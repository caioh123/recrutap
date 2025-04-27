import { Router } from "express";
import { DashboardController } from "../../controllers/dashboardController";
import { authMiddleware } from "../../middlewares/authorization";

 const router = Router()
 const dashboardController = new DashboardController()

 router.get("/", (req, res, next) => authMiddleware(["admin","recruiter"])(req as any, res, next), (req, res) => dashboardController.getDashboardData(req, res))

 export default router