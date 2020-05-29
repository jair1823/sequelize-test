import { Router } from "express";
import StudentController from "../controllers/student.controller";
const route = Router();

route.post("/", StudentController.createStudent);
route.get("/", StudentController.getAllStudents);
route.get("/:dni", StudentController.getStudentById);
// route.get("/", CampusController.getAllCampus);
// route.delete("/:id", CampusController.deleteCampus);

export default route;
