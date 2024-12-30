import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();

app.get("/",(req,res) => {
    res.send("I love you Carter");
})
app.get("/tasks", (req,res) => {
    res.send("recieved req");
})

app.listen(5000, () => {
    connectDB();
    console.log(process.env.MONGO_URI);
    console.log("Sever has started and is being watched at http://localhost:5000\n" + "Hi Kelvin\n" + "Bye Kelvin\n" + "Hi Carter\n" + "I Love you Carter\n");
})

