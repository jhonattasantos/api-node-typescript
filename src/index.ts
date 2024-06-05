import express, { NextFunction, Request, Response } from "express";
import { config } from "dotenv";
import usersRouter from "./routes/users";

config();

const app = express();
const port = process.env.PORT || 3033;

app.use(express.json());

app.use("/api/users", usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
