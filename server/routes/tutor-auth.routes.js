import { Router } from "express";
import tutorSignup from "../controllers/tutors-controllers/tutor-signup.js";

const tutorAuthRoutes = Router();

tutorAuthRoutes.post("/signup", tutorSignup);

export default tutorAuthRoutes;
