import express, { json } from "express";
import dotenv from "dotenv";
import cors from "cors";

import authRouter from "./routes/authRouter.js";

const app = express();
dotenv.config();
app.use(json());
app.use(cors());

app.use(authRouter);
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
