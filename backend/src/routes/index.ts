import express from 'express';
import jobRoutes from './jobs/job'
import candidatesRoutes from './candidates/candidates'
import jobCandidateRoutes from './jobCandidate/jobCandidate'
import companiesRoutes  from './companies/companies'
import interviewRoutes from './interview/interview'
import authRoutes from './auth/auth'
import inviteRoutes from './invites/invite'
import userRoutes from './user/user'
import dashboardRoutes from './dashboard/dashboard'

const router = express.Router();

router.use('/jobs', jobRoutes);
router.use('/candidates', candidatesRoutes);
router.use('/relate', jobCandidateRoutes);
router.use('/companies', companiesRoutes)
router.use('/interviews', interviewRoutes)
router.use('/auth', authRoutes)
router.use('/invites', inviteRoutes)
router.use("/users", userRoutes)
router.use("/dashboard", dashboardRoutes)

export default router