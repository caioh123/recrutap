import express from "express";
import { JobCandidateController } from "../../controllers/jobCandidateController";
import { authMiddleware } from "../../middlewares/authorization";

const router = express.Router();
const jobCandidateController = new JobCandidateController();

router.post("/", (req, res, next) => authMiddleware(["admin","recruiter"])(req as any, res, next),(req, res) => jobCandidateController.relateCandidateToJob(req, res));
router.get("/job/:jobId/candidates", (req, res, next) => authMiddleware(["admin","recruiter"])(req as any, res, next), (req, res) => jobCandidateController.getCandidatesByJob(req, res));
router.get("/candidates/:candidateId/jobs", (req, res, next) => authMiddleware(["admin","recruiter"])(req as any, res, next), (req, res) => jobCandidateController.getJobsByCandidate(req, res));
router.delete("/job/:jobId/candidates/:candidateId",(req, res, next) => authMiddleware(["admin","recruiter"])(req as any, res, next),  (req, res) =>
    jobCandidateController.removeJobCandidate(req, res)
  );
export default router;
