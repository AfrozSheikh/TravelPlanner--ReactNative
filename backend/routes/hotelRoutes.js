import express from "express";
import { addHotel, getHotels } from "../controllers/hotelController.js";
 import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/add", authMiddleware, addHotel);
router.get("/list", getHotels);

export default router;
