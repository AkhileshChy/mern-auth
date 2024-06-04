import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js"
import connectMongoDB from "./db/connectDatabase.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
connectMongoDB();

app.use(express.json());

app.use("/", authRoutes);

app.listen(PORT, () => {
    console.log(`Server running on Port : ${PORT}`)
})