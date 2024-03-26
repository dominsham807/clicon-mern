import crypto from "crypto"
import User from "../models/User.js"
import BadRequestError from "../errors/bad-request.js"
import sendVerificationEmail from "../utils/sendVerificationEmail.js"

export const registerUser = async(req, res) => {
    try{
        const { password, confirmPassword } = req.body

        if(password !== confirmPassword){
            throw new BadRequestError("Passwords not matched") 
        }
    
        const role = 'user'
    
        const verificationToken = crypto.randomBytes(40).toString('hex')
        const user = await User.create({ ...req.body, role, verificationToken })
        const origin = 'http://localhost:5173'
        
        await sendVerificationEmail({ name: user.lastName, email: user.email, verificationToken: user.verificationToken, origin })
        res.status(201).json({ success: true, message: "Please verify your email" })
    } catch(error){    
        res.status(500).send({
            success: false,
            message: "Error in registration",
            error 
        })
        console.log(error)
    }
}