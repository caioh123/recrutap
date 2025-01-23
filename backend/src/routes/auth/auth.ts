import { Router } from "express";
import { AuthController } from "../../controllers/authController";

const router = Router();

const authController = new AuthController();

router.post("/signup", authController.signup);
router.post("/signin", authController.signin);


export default router