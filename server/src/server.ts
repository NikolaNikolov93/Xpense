import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";
import cookieParser from "cookie-parser";
import connectDB from "./config/db";
import authRoutes from "./routes/authRoutes";
import expenseRoutes from "./routes/expenseRoutes";
import errorHandler from "./middlewares/errorHandler";
import path from "path";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

const corsOptions = {
  origin:
    process.env.NODE_ENV === "production"
      ? process.env.CLIENT_URL
      : process.env.DEV_URL,
  credentials: true, // Allow cookies to be sent
  METHODS: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.use(express.json({ limit: "10mb" }));
app.use(cookieParser()); // Enables reading HTTP-only cookies
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

app.use("/auth", authRoutes);
app.use("/expenses", expenseRoutes); // Register expense routes
app.use(errorHandler);
if (process.env.NODE_ENV === "production") {
  // Set static folder to the React build folder
  app.use(express.static(path.join(__dirname, "client", "build")));

  // Serve the React app for any route not handled by the API
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

connectDB();

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
