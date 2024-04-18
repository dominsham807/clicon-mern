import crypto from "crypto"
import User from "../models/User.js"
import BadRequestError from "../errors/bad-request.js"
import sendVerificationEmail from "../utils/sendVerificationEmail.js"
import UnauthenticatedError from "../errors/unauthenticated.js"
import { StatusCodes } from "http-status-codes"
import notFound from "../middlewares/not-found.js"
import { generateToken } from "../utils/jwt.js"

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
        res.status(StatusCodes.CREATED).json({ success: true, message: "Register success! Please verify your email before login" })
    } catch(error){    
        res.status(500).send({
            success: false,
            message: "Error in registration",
            error 
        })
        console.log(error)
    }
}

export const verifyEmail = async(req, res) => {
    try{
        const { verificationToken, email } = req.body 

        const user = await User.findOne({ email: email })
        console.log(user)

        if(!user){
            throw new UnauthenticatedError("Verification failed") 
        }

        console.log(user.verificationToken)
        console.log(verificationToken)
        
        if(verificationToken !== user.verificationToken){
            throw new UnauthenticatedError("Verification failed") 
        }
    
        user.isVerified = true 
        user.verified = Date.now()
        user.verificationToken = ""
    
        await user.save()
    
        res.status(StatusCodes.OK).json({
            success: true,
            message: "Your email is successfully verified"
        })
    } catch(error){    
        res.status(500).send({
            success: false,
            message: "Error in verification",
            error 
        })
        console.log(error)
    } 
}

export const loginUser = async(req, res) => {
    try{
        const { email, password } = req.body 

        if(!email || !password){
            throw new BadRequestError("Email and Password are all required") 
        }
    
        const user = await User.findOne({ email }) 
        if(!user){
            throw new notFound("User not found")
        }

        const isPasswordCorrect = await user.comparePassword(password)

        if(!isPasswordCorrect){
            throw new UnauthenticatedError("Email or Password incorrect")
        }

        if(!user.isVerified){
            throw new UnauthenticatedError("Please verify your email before login")
        }

        // const userToken = createUserToken(user) 

        // let refreshToken = ''
 
        // const existingToken = await Token.findOne({ user: user._id })
        // if(existingToken){
        //     const { isValid } = existingToken
        //     if(!isValid){
        //         throw new UnauthenticatedError("Invalid credentials")
        //     }
        //     refreshToken = existingToken.refreshToken
        // } else{
        //     refreshToken = crypto.randomBytes(40).toString("hex") 
        //     const userToken = { refreshToken, user: user._id }

        //     await Token.create(userToken)
        // }

        // const { accessTokenJwt, refreshTokenJwt } = attachCookiesToResponse({ res, user, refreshToken }) 
        console.log(user._id)
        const token = generateToken(user._id)
        console.log(token)

        res.status(StatusCodes.OK).json({
            success: true,
            message: "Login Success",
            user: {
                _id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                username: user.username,
                email: user.email,
                role: user.role
            }, 
            token
        })
    } catch(error){
        res.status(500).send({
            success: false,
            message: "Login Error!",
            error 
        })
        console.log(error)
    } 
}

export const testRoute = (req, res) => {
    res.send({message: "Test route"})
}
