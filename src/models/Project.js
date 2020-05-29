import Sequelize, { DataTypes } from "sequelize";
import { sequelize } from "../database/connection";

const Project = sequelize.define(
  "Project",
  {
    id_project: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
    },
    code: {
      type: DataTypes.STRING,
    },
  },
  { tableName: "Project", timestamps: false }
);

export default Project;
