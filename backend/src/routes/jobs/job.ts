import express from 'express';
import { JobController } from '../../controllers/jobController';

 const router = express.Router();
const jobController = new JobController();

router.get('/', jobController.getAllJobs);
router.post("/", jobController.createJob);

export default router