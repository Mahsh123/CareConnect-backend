import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import route from "./routes/userRoutes.js"

import cors from "cors"

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.use("/api/user", route);

dotenv.config();

const PORT = process.env.Port || 5000;
const MONGOURL = process.env.MONGO_URL;

mongoose.connect(MONGOURL).then(() => {
    console.log("Database connected successfully")
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
 })

   .catch((error) => console.log(error));


