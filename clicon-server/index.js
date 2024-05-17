import express from "express"
import chalk from "chalk"
import bodyParser from 'body-parser'
import cors from "cors"
import morgan from "morgan"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import { allRoutes } from "./routes"
// import authRoutes from "./routes/authRoute.js"
// import userRoutes from "./routes/userRoute.js"
// import productRoutes from "./routes/productRoute.js"
// import orderRoutes from "./routes/orderRoute.js"
import { connectDB } from "./db/connect.js"
import errorHandlerMiddleware from "./middlewares/error-handler.js"
import notFound from "./middlewares/not-found.js"

dotenv.config()

const app = express()

const corsOptions = {
    origin: ["http://localhost:4000/", "https://clicon-web.vercel.app/"],
}

app.use(cors(corsOptions))

app.use(morgan('dev'))

app.use(express.urlencoded({ extended: true })) 
app.use(express.json())

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 })) 
app.use(cookieParser(process.env.JWT_SECRET))

app.use(express.static("public"))

// app.get("/", () => {
//     console.log("Backend Clicon Ecommerce")
// })

app.get("/", (req, res) => {
    res.status(200).json({ message: "Clicon Ecommerce website" })
})

app.use("/api/v1", allRoutes) 

app.use(errorHandlerMiddleware)
app.use(notFound)

const port = process.env.PORT || 4000

app.listen(port, () => {
    connectDB()
    console.log(`${chalk.green('✓')} ${chalk.blue(
        `Listening on port ${port}. Visit http://localhost:${port}/ in your browser.`
    )}`)
})

export default app;