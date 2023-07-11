import { Router } from "express";
import { logIn, signUp } from "../controllers/userContollers";


const router = Router();

router.post("/signup", signUp);
router.post("/login", logIn);

export { router as userRouter };
