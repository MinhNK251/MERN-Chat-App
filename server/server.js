// Step 1: Open terminal then type npm init -y
// Step 2: npm install bcryptjs cloudinary cors dotenv express jsonwebtoken mongoose socket.io
// Step 3: npm install nodemon
// Step 4: Set up .env file with MongoDB and PORT
// Step 5: Set up Cloudinary in .env

import express from "express";
import "dotenv/config";
import cors from "cors";
import http from "http";
import { connectDB } from "./lib/db.js";
import userRouter from "./routes/userRoutes.js";
import messageRouter from "./routes/messageRouter.js";

// Create Express app and HTTP server
const app = express();
const server = http.createServer(app)

// Middleware setup
app.use(express.json({limit: "4mb"}));
app.use(cors());

app.use("/api/status", (req, res)=> res.send("Server is fine"));
app.use("/api/auth", userRouter);
app.use("/api/messages", messageRouter);

// Connect to MongoDB
await connectDB();

const PORT = process.env.PORT || 5000;
server.listen(PORT, ()=> console.log("Server is running on PORT: " + PORT));