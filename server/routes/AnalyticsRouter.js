import express from "express";
import { getSummary } from "../controllers/AnalyticsController.js";

const analyticsrouter = express.Router();

analyticsrouter.get("/summary", getSummary);

export default analyticsrouter;
