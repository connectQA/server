import { DataTypes, UUIDV4 } from "sequelize";
import { database } from "../client/sql";

const id = {
  type: DataTypes.UUID,
  defaultValue: UUIDV4,
  primaryKey: true,
};

const Agent = database.define("agents", {
  id,
  userId: DataTypes.UUID,
  url: DataTypes.STRING,
});

const User = database.define("users", {
  id,
  accountId: DataTypes.STRING,
  token: DataTypes.STRING,
});

const Run = database.define(
  "runs",
  {
    agentId: DataTypes.UUID,
    success: DataTypes.BOOLEAN,
    result: DataTypes.JSONB,
    startedAt: DataTypes.TIME,
    finishedAt: DataTypes.TIME,
  },
  {
    timestamps: false,
  }
);

// Relations
User.hasOne(Agent, { foreignKey: "userId" });
Agent.belongsTo(User, { foreignKey: "userId" });

Agent.hasMany(Run);
Run.belongsTo(Agent);

export { User, Agent, Run };
