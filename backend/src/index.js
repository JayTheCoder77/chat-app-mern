import express from "express";
import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoute.js";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
// step 1 = define auth and message routes
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

// const PORT =
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
  connectDB();
});

// By default, Express limits incoming JSON and URL-encoded payloads to 100KB. If your image exceeds this size limit, as it did in my case, the server throws a 413 Payload Too Large error. To resolve this, you need to increase the payload limit in your server configuration. Simply update your index.js file and replace app.use(express.json()); with app.use(express.json({ limit: '10mb' }));, and also include app.use(express.urlencoded({ extended: true, limit: '10mb' }));. This change will allow your server to handle larger image uploads without throwing the error.
