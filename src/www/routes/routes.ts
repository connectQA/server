import { Application } from "express";
import { validateController } from "../controllers/validate-controller";
import { registerController } from "../controllers/register-controller";
import { goController } from "../controllers/go-controller";

export function routesProvider(app: Application) {
  app.post("/validate", validateController().validate);
  app.post("/register", registerController().register);
  app.post("/go", goController().go);
}
