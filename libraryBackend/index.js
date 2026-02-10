import express from "express";
import dotenv from "dotenv";
import { admin } from "./route/adminroute.js";
import {user} from "./route/userroute.js"

dotenv.config();
const app = express();


app.use(express.json());

app.use("/admin", admin);
app.use("/user", user);

app.get("/", (req, res) => {
  res.send("Welcome to Library Management System");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running at ${process.env.PORT}`);
});
