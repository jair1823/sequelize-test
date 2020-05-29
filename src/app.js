import express, { json } from "express";
import morgan from "morgan";

//import routes
import campusRoutes from "./routes/campus";
import studentRoutes from "./routes/student";
const app = express();

//middlewares
app.use(morgan("dev"));
app.use(json());

//routes
app.use("/api/campus", campusRoutes);
app.use("/api/student", studentRoutes);

export default app;
