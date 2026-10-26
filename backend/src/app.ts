// src/app.ts
import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 7000;

app.use(express.json());

// Base Root Route
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Nodemon + TypeScript server is running perfectly!" });
});

// Catch-all 404 Route
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
