import express from "express"
import cors from "cors"
import morgan from "morgan"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import authRoutes from "./routes/authRoute.js"
import { connectDB } from "./db/connect.js"
import errorHandlerMiddleware from "./middlewares/error-handler.js"
import notFound from "./middlewares/not-found.js"

dotenv.config()

const app = express()

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
    optionsSuccessStatus: 200 
}))

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false })) 
// app.use(cookieParser())
app.use(cookieParser(process.env.JWT_SECRET))

app.use("/api/v1/auth", authRoutes)

app.use(errorHandlerMiddleware)
app.use(notFound)

const port = process.env.PORT || 4000

app.listen(port, () => {
    connectDB()
    console.log(`Server running on port ${port}`)
})