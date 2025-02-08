import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";
import connectDB from "./config/db";
import userRoutes from "./routes/userRoutes";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

app.use("/api/users", userRoutes);
connectDB();

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
