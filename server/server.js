//importing dependencies
import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import cors from "cors";

//importing the functions
import connectDB from "./database/db.js";
import authRoutes from "./routes/auth.routes.js";
import coursesRoutes from "./routes/courses.routes.js";

//creating the app
const app = express();

//getting the port
const PORT = process.env.PORT || 3000;

//using the dependencies
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost/3000",
    credentials: true,
  })
);

//using the functions
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/courses", coursesRoutes);

//listening to the app
app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server is running on port ${PORT}...`);
});
