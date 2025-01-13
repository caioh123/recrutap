import express from 'express';
import jobRoutes from './jobs/job'
import candidatesRoutes from './candidates/candidates'

const router = express.Router();

router.use('/jobs', jobRoutes);
router.use('/candidates', candidatesRoutes);

export default router