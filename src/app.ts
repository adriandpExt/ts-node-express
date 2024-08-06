import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("HELLO WORLD TYPESCRIPT");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

export default app;
