import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import userRouter from "./src/routes/user.routes.js";
import moviesRouter from "./src/routes/movies.routes.js";

const app = express();

// CORS
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:8000",
    credentials: true,
  })
);

// Body parsers
app.use(express.json({ limit: "100kb" }));
app.use(express.urlencoded({ extended: true, limit: "100kb" }));

// Static files
app.use(express.static("public"));
app.use(cookieParser());

// Routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/movies", moviesRouter);

export { app };
