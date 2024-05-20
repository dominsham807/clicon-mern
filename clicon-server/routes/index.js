import express from "express"
import authRoutes from "./authRoute.js"
import userRoutes from "./userRoute.js"
import productRoutes from "./productRoute.js"
import orderRoutes from "./orderRoute.js"

const allRoutes = express()

allRoutes.use("/auth", authRoutes)
allRoutes.use("/user", userRoutes)
allRoutes.use("/product", productRoutes)
allRoutes.use("/order", orderRoutes)

export default allRoutes