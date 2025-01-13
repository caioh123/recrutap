import express from 'express';
import { JobController } from '../../controllers/jobController';

const router = express.Router();
const jobController = new JobController();



router.get('/', (req, res) => jobController.getAllJobs(req, res));
router.get('/:id', (req, res) => jobController.getJob(req, res));
router.post("/", (req, res) => jobController.createJob(req, res));
router.put("/:id", (req, res) => jobController.updateJob(req, res));
router.delete("/:id", (req, res) => jobController.deleteJob(req, res));

export default router;
