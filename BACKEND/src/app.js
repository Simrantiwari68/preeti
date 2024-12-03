import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import { createServer } from "node:http";
import { connectToSocket } from "./controller/socketManager.js";
import userRoutes from "./routes/users.routes.js";

const app = express();
const server = createServer(app);

const io = connectToSocket(server);

app.set("port" , (process.env.PORT || 8000))

app.use(cors());

app.use(express.json({limit : "40kb"}));
app.use(express.urlencoded({limit:"40kb", extended : true}));
app.use("/api/v1/users" , userRoutes);
const start = async ()=>{
    app.set("mongo_user")
   const connectionDb = await mongoose.connect("mongodb+srv://tiwarisimran967:S6VckdhetG6k6nYz@cluster0.8pd14.mongodb.net/");                
    console.log(`MONGO CONNECTED DB HOST ${connectionDb.connection.host}`);
    server.listen(app.get("port") , ()=>{
        console.log("LISTINING ON 8000 PORT");
    });
}
start();