import Sequelize from "sequelize";
// Option 2: Passing parameters separately (other dialects)
export const sequelize = new Sequelize("sequelize", "cordero", "Cordero1823", {
  host: "localhost",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    requere: 30000,
    idle: 10000,
  },
  logging: false,
});
