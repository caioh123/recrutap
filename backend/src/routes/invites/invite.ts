import { Router } from "express";
import { InviteController } from "../../controllers/inviteController"; 
import { authMiddleware } from "../../middlewares/authorization"; 

const router = Router();
const inviteController = new InviteController();

router.post("/", authMiddleware(["admin", "manager"]), (req, res) => inviteController.createInvite(req, res));
router.post("/use", (req, res) => inviteController.updateInvite(req, res));

export default router;
