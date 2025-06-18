import { Router } from "express";
import deleteCourse from "../controllers/courses-controllers/delete-course.js";
import getAllCourses from "../controllers/courses-controllers/get-all-courses.js";
import getUserCourses from "../controllers/courses-controllers/get-user-courses.js";
import modifyCourse from "../controllers/courses-controllers/modify-course.js";
import addCourse from "../controllers/courses-controllers/add-course.js";

const coursesRoutes = Router();

coursesRoutes.delete("delete-course", deleteCourse);
coursesRoutes.get("get-courses", getAllCourses);
coursesRoutes.get("/get-user-courses/:id", getUserCourses);
coursesRoutes.put("update-course/:id", modifyCourse);
coursesRoutes.post("/add-course", addCourse);

export default coursesRoutes;
