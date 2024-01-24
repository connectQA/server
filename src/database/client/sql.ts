import { Sequelize } from "sequelize";
import * as dotenv from "dotenv";
dotenv.config();

export const database = new Sequelize(process.env.DATABASE_CONNECTION_STRING!, {
  dialect: "postgres",
  logging: false,
  pool: {
    max: 25,
    min: 0,
    idle: 10000,
  },
});
