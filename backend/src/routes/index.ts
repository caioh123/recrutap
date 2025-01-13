import express from 'express';
import jobRoutes from './jobs/job'
import candidatesRoutes from './candidates/candidates'
import jobCandidateRoutes from './jobCandidate/jobCandidate'

const router = express.Router();

router.use('/jobs', jobRoutes);
router.use('/candidates', candidatesRoutes);
router.use('/relate', jobCandidateRoutes);

export default router