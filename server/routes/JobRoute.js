import express from "express";
import { addApplication } from "../controllers/JobController.js";

const router = express.Router();

router.post("/add",  addApplication);

export default router;
