import express from "express";


import dotenv from "dotenv"

import cookieParser from "cookie-parser";

import rootRouter from "./routes/index.routes.js";
import { connectDB } from "./utils/database.js";
import { errorMiddleWare } from "./exceptions/Error.js";

//import { createMessagesInaChat } from "./seeders/chat.js";
//import { createUseer } from "./seeders/user.js";

dotenv.config({
    path: "./.env"
});



const mongoURI = process.env.MONGO_URI;
const port = process.env.PORT || 3000;
const db_name = process.env.DATABASE_NAME

connectDB(mongoURI,db_name);


const app = express();
app.use(express.json());
app.use(cookieParser());

app.use('/api',rootRouter)
 

app.get("/", (req, res) =>{
    res.send("Bhai Ji Namaste");
})



app.use(errorMiddleWare);
app.listen(port, ()=>{
    console.log(`listening on  ${port}`);
})