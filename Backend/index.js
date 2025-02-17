import express from "express";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
import commentRouter from "./routes/comment.route.js";
import connectDB from "./lib/connectDB.js";
import webhookRouter from "./routes/webhook.route.js";
import { clerkMiddleware, requireAuth } from "@clerk/express";
import cors from "cors";

const app = express();

// Set up CORS options
const corsOptions = {
  origin: "http://localhost:5173", // Ensure this is the correct URL of your front-end
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(clerkMiddleware());
app.use(express.json());

// Register routes after the middleware
app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);
app.use("/webhooks", webhookRouter);

// Error handling middleware
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    message: error.message || "something went wrong",
    status: error.status,
    stack: error.stack,
  });
});

// Test route to ensure server is running
app.get("/test", (req, res) => {
  res.status(200).send("Server is running");
});

app.listen(3000, () => {
  connectDB();
  console.log("Server is running");
});
