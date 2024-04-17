import express from "express"
import { createOrder, getAllOrders, getOrderStatus, getSingleOrder, processOrder } from "../controllers/orderController.js"
import { authenticateUser } from "../middlewares/authentication.js"

const router = express.Router() 

router.post("/", authenticateUser, createOrder)
router.get("/", authenticateUser, getAllOrders)
router.get("/status", authenticateUser, getOrderStatus)
router.get("/:id", authenticateUser, getSingleOrder)
router.put("/:id", authenticateUser, processOrder)

export default router