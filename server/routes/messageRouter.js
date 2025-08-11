import express from "express";
import { protectRoute } from "../middleware/auth.js";
import { getMessages, getUsersForSidebar, markMessageAsSeen } from "../controllers/messageController.js";

const messageRouter = express.Router();

messageRouter.post("/users", protectRoute, getUsersForSidebar);
messageRouter.post("/:id", protectRoute), getMessages;
messageRouter.post("/mark/:id", protectRoute, markMessageAsSeen);

export default messageRouter;