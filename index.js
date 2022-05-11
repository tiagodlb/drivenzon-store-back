import express, { json } from "express";
import joi from "joi";
import dotenv from "dotenv";
import bcrypt from "bcrypt";

import db from "./db.js";

const app = express();
dotenv.config();
app.use(json());

//cadastro
app.post("/sign-up", async (req, res) => {
  //validar
  const signUpSchema = joi.object({
    name: joi.string().required(),
    email: joi.email().required(),
    password: joi.string().required(),
    confirmpassword: joi.ref("password"),
  });

  const { error } = signUpSchema.validate(req.body, { abortEarly: false });
  if (error) {
    return res.status(422).send(error.details.map((detail) => detail.message));
  }

  try {
    const { name, email, password } = req.body;
    const SALT = 10;
    const hashPassword = bcrypt.hashSync(password, SALT);

    await db.collection("users").insertOne({
      name,
      email,
      password: hashPassword,
    });
    res.sendStatus(201);
  } catch (error) {
    console.log("Error creating new user.");
    console.log(error);
    return res.sendStatus(500);
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
