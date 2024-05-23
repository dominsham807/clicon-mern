import express from "express"
import chalk from "chalk"
import path from "path"
import bodyParser from 'body-parser'
import cors from "cors"
import morgan from "morgan"
import dotenv from "dotenv"
import cookieParser from "cookie-parser" 
import authRoutes from "./routes/authRoute.js"
import userRoutes from "./routes/userRoute.js"
import productRoutes from "./routes/productRoute.js"
import orderRoutes from "./routes/orderRoute.js"
import { connectDB } from "./db/connect.js"
import errorHandlerMiddleware from "./middlewares/error-handler.js"
import notFound from "./middlewares/not-found.js"

dotenv.config()

const app = express()

connectDB()

const corsOptions = {
    origin: ['https://clicon-mern.vercel.app', 'http://localhost:5173'],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true
}
// app.options("", cors(corsOptions))
app.use(cors(corsOptions))

app.use(morgan('dev'))

app.use(express.urlencoded({ extended: true })) 
app.use(express.json())

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 })) 
app.use(cookieParser(process.env.JWT_SECRET))

const __dirname = path.resolve() 
console.log(__dirname)

// app.use(express.static("public"));

if (process.env.NODE_ENV === "production") { 
    app.use(express.static(path.resolve(__dirname, 'client', 'build')));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'),function (err) {
            if(err) {
                res.status(500).send(err)
            }
        });
    })
}

app.get('/api', (req, res) => {
    res.send("Hello from Node API server!");
});

app.get('/api/hello', (req, res) => {
    res.send("Hello from Dominic Sham!");
});

app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/user", userRoutes)
app.use("/api/v1/product", productRoutes)
app.use("/api/v1/order", orderRoutes)

app.use(errorHandlerMiddleware)
app.use(notFound)

const port = process.env.PORT || 4000



// app.use(express.static(path.join(__dirname, 'clicon-website/dist')));

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'clicon-website', 'dist', 'index.html'));
// });


app.listen(port, () => {
    // connectDB()
    console.log(`${chalk.green('✓')} ${chalk.blue(
        `Listening on port ${port}. Visit http://localhost:${port}/ in your browser.`
    )}`)
})

export default app;