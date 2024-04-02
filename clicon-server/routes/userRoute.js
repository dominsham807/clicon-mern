import express from "express"
import { getProfile, updateProfile } from "../controllers/userController.js"
import { authenticateUser } from "../middlewares/authentication.js"

const router = express.Router()

router.get("/profile", authenticateUser, getProfile) 
router.put("/profile", authenticateUser, updateProfile) 

export default router