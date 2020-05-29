import Sequelize, { DataTypes } from "sequelize";
import { sequelize } from "../database/connection";
import Person from "./Person";
import Project from "./Project";

const Person_Project = sequelize.define(
  "Person_Project",
  {
    dni: {
      primaryKey: true,
      type: DataTypes.STRING,
      references: {
        model: {
          tableName: "Person",
        },
        key: "dni",
      },
    },
    id_project: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: {
          tableName: "Project",
        },
        key: "id_project",
      },
    },
    role: {
      type: DataTypes.STRING,
    },
  },
  { tableName: "Person_Project", timestamps: false }
);
//Person Relation
Person.belongsToMany(Project, { through: "Person_Project", foreignKey: "dni" });
Project.belongsToMany(Person, {
  through: "Person_Project",
  foreignKey: "id_project",
});

export default Person_Project;
