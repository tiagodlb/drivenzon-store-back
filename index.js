import express, { json } from "express";
import dotenv from "dotenv";
import cors from "cors";

import router from "./routes/index.js";

const app = express();
dotenv.config();
app.use(json());
app.use(cors());

app.use(router);
app.listen(process.env.PORT, () => {
  console.log("Server running on port " + process.env.PORT);
});
