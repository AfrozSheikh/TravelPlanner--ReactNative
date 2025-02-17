import express from "express";
import { getTouristPlaces } from "../controllers/aiController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/places",authMiddleware ,  getTouristPlaces);

export default router;
