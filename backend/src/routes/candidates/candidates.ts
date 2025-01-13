import express from 'express';
import {CandidateController } from '../../controllers/candidateController';

const router = express.Router();
const candidateController = new CandidateController();



router.get('/', (req, res) => candidateController.getAllCandidates(req, res));
router.get('/:id', (req, res) => candidateController.getCandidate(req, res));
router.post("/", (req, res) => candidateController.createCandidate(req, res));
router.put("/:id", (req, res) => candidateController.updateCandidate(req, res));
router.delete("/:id", (req, res) => candidateController.deleteCandidate(req, res));

export default router;
