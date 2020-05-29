import Sequelize, { DataTypes } from "sequelize";
import { sequelize } from "../database/connection";

const Campus = sequelize.define(
  "Campus",
  {
    id_campus: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
    },
  },
  { tableName: "Campus", timestamps: false }
);

export default Campus;
