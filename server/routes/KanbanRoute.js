import express from "express";
import { getAllApplications, updateApplicationStatus } from "../controllers/KanbanController.js";

const kanbanrouter = express.Router();

kanbanrouter.get("/", getAllApplications);
kanbanrouter.put("/:id", updateApplicationStatus);

export default kanbanrouter;
