import { Router } from "express";
import { InterviewController } from "../../controllers/interviewController";
import { authMiddleware } from "../../middlewares/authorization";

const router = Router();
const interviewController = new InterviewController();

router.get("/", (req, res, next) => authMiddleware(["admin","recruiter"])(req as any, res, next),interviewController.getAllInterviews);
router.get("/:id", (req, res, next) => authMiddleware(["admin","recruiter"])(req as any, res, next),interviewController.getInterview);
router.post("/", (req, res, next) => authMiddleware(["admin","recruiter"])(req as any, res, next), interviewController.createInterview);

export default router;