import { Router } from "express";
import { InviteController } from "../../controllers/inviteController"; 
import { authMiddleware } from "../../middlewares/authorization"; 

const router = Router();
const inviteController = new InviteController();

router.post("/", authMiddleware(["admin", "manager"]), (req, res) => inviteController.createInvite(req, res));
router.get("/validate/:token", (req,res) => inviteController.validateToken(req,res))
router.post("/accept", (req, res) => inviteController.acceptInvite(req, res));
router.get("/", (req,res) => inviteController.getAllInvites(req,res))

export default router;
