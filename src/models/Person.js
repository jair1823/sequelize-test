import Sequelize, { DataTypes } from "sequelize";
import { sequelize } from "../database/connection";

const Person = sequelize.define(
  "Person",
  {
    dni: {
      primaryKey: true,
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    lastname: {
      type: DataTypes.STRING,
    },
  },
  { tableName: "Person", timestamps: false }
);

export default Person;
