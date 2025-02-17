import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import travelRoutes from "./routes/travelRoutes.js";
import transportRoutes from "./routes/transportRoutes.js";
import hotelRoutes from "./routes/hotelRoutes.js";
import aiRoutes from "./routes/aiRoutes.js";
import profileRoutes from './routes/profileRoutes.js'
dotenv.config();
connectDB();

const app = express();
app.use(express.json());
import locationRoutes from "./routes/locationRoutes.js";

app.use("/api/location", locationRoutes);
import cors from "cors"
app.use(cors({ origin: "*" })); // Allow all origins
app.use('/api/p', profileRoutes) 
app.use("/api/auth", authRoutes);
app.use("/api/travel", travelRoutes);
app.use("/api/transport", transportRoutes);
app.use("/api/hotel", hotelRoutes);
app.use("/api/ai", aiRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
