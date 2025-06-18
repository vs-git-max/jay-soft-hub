import { Router } from "express";
import signup from "../controllers/auth-controllers/signup.js";
import login from "../controllers/auth-controllers/login.js";
import logout from "../controllers/auth-controllers/logout.js";

const authRoutes = Router();

authRoutes.post("/signup", signup);
authRoutes.post("/login", login);
authRoutes.post("/logout", logout);

export default authRoutes;
