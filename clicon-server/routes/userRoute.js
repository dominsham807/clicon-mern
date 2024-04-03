import express from "express"
import { getProfile, updateProfile } from "../controllers/userController.js"
import { authenticateUser } from "../middlewares/authentication.js"
import uploadProfile from "../middlewares/uploadProfile.js"

const router = express.Router()

router.get("/profile", authenticateUser, getProfile) 
router.put("/profile", authenticateUser, uploadProfile.array("photo"), updateProfile) 

export default router