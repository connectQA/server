import { Application } from "express";
import { agentController } from "../controllers/agent.controller";
import { execController } from "../controllers/exec.controller";
import { runsController } from "../controllers/runs.controller";
import { userController } from "../controllers/user.controller";

export function routesProvider(app: Application) {
  // User
  app.post("/create", userController().create);
  app.post("/update", userController().update);

  // Agent
  app.post("/validate", agentController().validate);
  app.post("/register", agentController().register);

  // Runs
  app.get("/runs", runsController().runs);
  app.get("/result", runsController().resultByRun);

  // Exec
  app.post("/go", execController().go);
}
