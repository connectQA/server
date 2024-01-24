import { DataTypes } from "sequelize";
import { database } from "../client/sql";

const Agent = database.define("agents", {
  agentId: { type: DataTypes.UUID, primaryKey: true },
  userId: DataTypes.UUID,
  url: DataTypes.STRING,
});

const User = database.define("users", {
  userId: { type: DataTypes.UUID, primaryKey: true },
  accountId: DataTypes.STRING,
  token: DataTypes.STRING,
});

User.hasOne(Agent, { foreignKey: "userId" });
Agent.belongsTo(User, { foreignKey: "userId" });

export { User, Agent };
