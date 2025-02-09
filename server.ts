import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

const port = process.env.PORT || 3000;
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Typescript express");
});

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
