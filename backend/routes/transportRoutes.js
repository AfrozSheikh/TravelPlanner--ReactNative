import express from "express";
import { addTransportOption, getTransportOptions } from "../controllers/transportController.js";
 import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/add",authMiddleware ,  addTransportOption);
router.get("/list", getTransportOptions);

export default router;
