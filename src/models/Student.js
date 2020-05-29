import { DataTypes } from "sequelize";
import { sequelize } from "../database/connection";
import Campus from "./Campus";
import Person from "./Person";

const Student = sequelize.define(
  "Student",
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
    id_campus: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: "Campus",
        },
        key: "id_campus",
      },
    },
    profile: {
      type: DataTypes.STRING,
    },
  },
  { tableName: "Student", timestamps: false }
);
//Person Relation
Person.hasOne(Student, {
  foreignKey: "dni",
});
Student.belongsTo(Person, {
  foreignKey: "dni",
});

//Campus Relation
Campus.hasMany(Student, {
  foreignKey: "id_campus",
});
Student.belongsTo(Campus, {
  foreignKey: "id_campus",
});

export default Student;
