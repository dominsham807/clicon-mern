import express from "express"
import { addItemToCart } from "../controllers/cartController.js"
import { authenticateUser } from "../middlewares/authentication.js"

const router = express.Router() 

router.post("/", authenticateUser, addItemToCart)

export default router