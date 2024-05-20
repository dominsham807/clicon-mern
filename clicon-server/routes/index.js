import express from "express"
import authRoutes from "./authRoute.js"
import userRoutes from "./userRoute.js"
import productRoutes from "./productRoute.js"
import orderRoutes from "./orderRoute.js"

const allRoutes = express()

allRoutes.get("/", async (req, res, next) => {
    return res.status(200).json({
        title: "Express Testing",
        message: "The app is working properly!",
    })
})

allRoutes.use("/auth", authRoutes)
allRoutes.use("/user", userRoutes)
allRoutes.use("/product", productRoutes)
allRoutes.use("/order", orderRoutes)

export default allRoutes