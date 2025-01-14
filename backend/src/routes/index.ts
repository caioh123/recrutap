import express from 'express';
import jobRoutes from './jobs/job'
import candidatesRoutes from './candidates/candidates'
import jobCandidateRoutes from './jobCandidate/jobCandidate'
import companiesRoutes  from './companies/companies'
import interviewRoutes from './interview/interview'

const router = express.Router();

router.use('/jobs', jobRoutes);
router.use('/candidates', candidatesRoutes);
router.use('/relate', jobCandidateRoutes);
router.use('/companies', companiesRoutes)
router.use('/interviews', interviewRoutes)

export default router