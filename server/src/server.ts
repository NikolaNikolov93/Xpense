import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";
import cookieParser from "cookie-parser";
import connectDB from "./config/db";
import authRoutes from "./routes/authRoutes";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

const corsOptions = {
  origin:
    process.env.NODE_ENV === "production"
      ? process.env.CLIENT_URL
      : "http://localhost:5173",
  credentials: true, // Allow cookies to be sent
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser()); // Enables reading HTTP-only cookies
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

app.use("/auth", authRoutes);

connectDB();

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
