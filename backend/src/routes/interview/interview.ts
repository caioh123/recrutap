import { Router } from "express";
import { InterviewController } from "../../controllers/interviewController";

const router = Router();
const interviewController = new InterviewController();

router.get("/", interviewController.getAllInterviews);
router.get("/:id", interviewController.getInterview);
router.post("/", interviewController.createInterview);

export default router;