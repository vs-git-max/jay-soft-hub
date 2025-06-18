import { Router } from "express";
import signup from "../controllers/auth-controllers/signup.js";
import login from "../controllers/auth-controllers/login.js";
import logout from "../controllers/auth-controllers/logout.js";
import checkAuth from "../middlewares/check-auth.js";

const authRoutes = Router();

authRoutes.post("/signup", signup);
authRoutes.post("/login", login);
authRoutes.post("/logout", checkAuth, logout);

export default authRoutes;
