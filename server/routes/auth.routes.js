import { Router } from "express";
import signup from "../controllers/auth-controllers/signup.js";
import login from "../controllers/auth-controllers/login.js";

const authRoutes = Router();

authRoutes.post("/signup", signup);
authRoutes.post("/signup", login);

export default authRoutes;
