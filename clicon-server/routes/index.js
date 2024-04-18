import express from "express"
import authRoutes from "./authRoute.js"
import userRoutes from "./userRoute.js"
import productRoutes from "./productRoute.js"
import orderRoutes from "./orderRoute.js"

const router = express()

router.use("/api/v1/auth", authRoutes)
router.use("/api/v1/user", userRoutes)
router.use("/api/v1/product", productRoutes)
router.use("/api/v1/order", orderRoutes)

export default router