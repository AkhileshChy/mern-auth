import express from "express";
import cors from "cors";
import { loginUser, registerUser } from "../controllers/auth.controllers.js";

const router = express.Router();

router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    })
)

router.post('/register', registerUser);
router.post('/login', loginUser)


export default router;