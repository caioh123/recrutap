import express from 'express';
import { JobController } from '../../controllers/jobController';
import { authMiddleware } from '../../middlewares/authorization';

const router = express.Router();
const jobController = new JobController();



router.get('/', (req, res, next) => authMiddleware(["admin","recruiter"])(req as any, res, next), (req, res) => jobController.getAllJobs(req, res));
router.get('/:id', (req, res, next) => authMiddleware(["admin","recruiter"])(req as any, res, next),(req, res) => jobController.getJob(req, res));
router.post("/", (req, res, next) => authMiddleware(["admin","recruiter"])(req as any, res, next), (req, res) => jobController.createJob(req, res));
router.put("/:id",(req, res, next) => authMiddleware(["admin","recruiter"])(req as any, res, next), (req, res) => jobController.updateJob(req, res));
router.delete("/:id",(req, res, next) => authMiddleware(["admin","recruiter"])(req as any, res, next), (req, res) => jobController.deleteJob(req, res));

export default router;
