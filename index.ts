import express from "express";
import * as dotenv from "dotenv";
import { routesProvider } from "./src/www/routes/routes";

// Config
dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
routesProvider(app);

// Start
app.listen("3000", async () => {
  console.log("Working on PORT", process.env.PORT || 3000);
});
