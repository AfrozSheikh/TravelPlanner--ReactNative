import express from "express";
import { addTravelEntry } from "../controllers/travelController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/add", authMiddleware,addTravelEntry);

export default router;
