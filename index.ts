import express from "express";

// Config
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Start
app.listen("3000", () => {
  console.log("working on 3000");
});
