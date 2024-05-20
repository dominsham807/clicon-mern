import express from "express"
import authRoutes from "./authRoute.js"
import userRoutes from "./userRoute.js"
import productRoutes from "./productRoute.js"
import orderRoutes from "./orderRoute.js"

const router = express()

router.get("/", async (req, res, next) => {
    return res.status(200).json({
        title: "Express Testing",
        message: "The app is working properly!",
    })
})

router.use("/auth", authRoutes)
router.use("/user", userRoutes)
router.use("/product", productRoutes)
router.use("/order", orderRoutes)

export default router