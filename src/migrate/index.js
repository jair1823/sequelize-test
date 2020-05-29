import Campus from "../models/Campus";
import Person from "../models/Person";
import Student from "../models/Student";
import Project from "../models/Project";
import Person_Project from "../models/Person_Project";

async function migrate() {
  await Campus.sync({ force: true });
  await Person.sync({ force: true });
  await Student.sync({ force: true });
  await Project.sync({ force: true });
  await Person_Project.sync({ force: true });
  console.log("Migrates ends!");
}

migrate();
