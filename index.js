import express from 'express';
import databaseConnection from "./config/database.js";
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv';
import cors from "cors";
import userRoute from './routes/userroutes.js';
import tweetRoute from './routes/tweetroutes.js'

dotenv.config({
    path: "./.env"
})


databaseConnection();
const app = express();

// middlewares
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(cookieParser());
const corsOptions = {
    origin: "https://twitterclone123.netlify.app",
    credentials: true
}
app.use(cors(corsOptions));


// api
app.get('/', (req, res) => res.send('Hello World!'))
app.use("/api/v1/user", userRoute);
app.use("/api/v1/tweet", tweetRoute);



app.listen(process.env.PORT, () => {
    console.log(`Server listen at port ${process.env.PORT}`);
})