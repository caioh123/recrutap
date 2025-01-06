import express from 'express';
import jobRoutes from './jobs/job'

const router = express.Router();

router.use('/jobs', jobRoutes);

export default router