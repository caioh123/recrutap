import { Router } from "express";
import { UserController } from "../../controllers/userController";
import { authMiddleware } from "../../middlewares/authorization";

const router = Router()
const userController = new UserController()

router.get("/", 
  (req, res, next) => authMiddleware(["admin","recruiter"])(req as any, res, next),
  (req, res) => userController.getAllUsers(req, res)
);
router.get("/me",(req, res, next) => authMiddleware(["admin","recruiter"])(req as any, res, next), (req,res) => userController.getMe(req,res))

export default router;