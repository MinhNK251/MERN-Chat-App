// Step 1: Open terminal then type npm init -y
// Step 2: npm install bcryptjs cloudinary cors dotenv express jsonwebtoken mongoose socket.io
// Step 3: npm install nodemon

import express from "express";
import "dotenv/config";
import cors from "cors";
import http from "http";

// Create Express app and HTTP server
const app = express();
const server = http.createServer(app)

// Middleware setup
app.use(express.json({limit: "4mb"}));
app.use(cors());

app.use("/api/status", (req, res)=> res.send("Server is fine"));

const PORT = process.env.PORT || 5000;
server.listen(PORT, ()=> console.log("Server is running on PORT: " + PORT));