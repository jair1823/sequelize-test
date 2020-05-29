import { Router } from "express";
import CampusController from "../controllers/campus.controller";
const route = Router();

route.post("/", CampusController.createCampus);
route.get("/", CampusController.getAllCampus);
route.get("/:id", CampusController.getCampusById);
route.delete("/:id", CampusController.deleteCampus);

export default route;
