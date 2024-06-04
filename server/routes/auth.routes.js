import express from "express";
import cors from "cors";
import { getProfile, loginUser, registerUser } from "../controllers/auth.controllers.js";

const router = express.Router();

router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    })
)

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', getProfile)


export default router;