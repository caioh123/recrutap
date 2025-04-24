import express from 'express';
import { CandidateController } from '../../controllers/candidateController';
import { authMiddleware } from '../../middlewares/authorization';

const router = express.Router();
const candidateController = new CandidateController();



router.get('/', (req, res, next) => authMiddleware(["admin","recruiter"])(req as any, res, next), (req, res) => candidateController.getAllCandidates(req, res));
router.get('/:id', (req, res, next) => authMiddleware(["admin","recruiter"])(req as any, res, next), (req, res) => candidateController.getCandidate(req, res));
router.post("/", (req, res, next) => authMiddleware(["admin","recruiter"])(req as any, res, next), (req, res) => candidateController.createCandidate(req, res));
router.put("/:id", (req, res, next) => authMiddleware(["admin","recruiter"])(req as any, res, next), (req, res) => candidateController.updateCandidate(req, res));
router.delete("/:id", (req, res, next) => authMiddleware(["admin","recruiter"])(req as any, res, next), (req, res) => candidateController.deleteCandidate(req, res));

export default router;
