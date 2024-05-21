import express from "express"
import { loginUser, registerUser, testRoute, verifyEmail } from "../controllers/authController.js"
import { authenticateUser } from "../middlewares/authentication.js"

const router = express.Router()

router.post("/register", registerUser)
router.post("/verify", verifyEmail)
router.post("/login", loginUser)

router.get("/test", authenticateUser, testRoute)

export default router