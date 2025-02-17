import express from "express";
import { updateLocation, swapLocation, getUserLocation } from "../controllers/locationController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

// Location Routes
router.post("/update", authMiddleware, updateLocation);
router.post("/swap", authMiddleware, swapLocation);
router.get("/", authMiddleware, getUserLocation);

export default router;
