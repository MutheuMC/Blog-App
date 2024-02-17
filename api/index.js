import express from "express"
import authRoutes from "./routes/auth.js"
import postRoutes from "./routes/post.js"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser())
app.use("/api/auth", authRoutes);
app.use("/posts", postRoutes)

app.listen(8000 ,()=>{
    console.log("connected to db");
})