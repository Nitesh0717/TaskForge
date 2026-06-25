import express from "express";
import { getOverview } from "../controllers/dashboard.controller.js";

const router = express.Router();

router.get("/overview", getOverview);

export default router;
