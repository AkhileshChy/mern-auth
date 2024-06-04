import express from "express";
import cors from "cors";
import { registerUser } from "../controllers/auth.controllers.js";

const router = express.Router();

router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    })
)

router.post('/register', registerUser);


export default router;