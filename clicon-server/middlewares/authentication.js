import jwt from "jsonwebtoken"
import UnauthenticatedError from "../errors/unauthenticated.js" 
import User from "../models/User.js"

export const authenticateUser = async(req, res, next) => {  
    let token  

    if(req.headers.authorization){
        try{
            token = req.headers.authorization  

            const decoded = jwt.verify(token, process.env.JWT_SECRET)
      
            req.user = await User.findById(decoded.id).select('-password')
            console.log(req.user)

            next()
        } catch(error){
            console.log(error)
            throw new UnauthenticatedError('Invalid authentication')
        }
    } 

    if(!token){
        throw new UnauthenticatedError('Invalid authentication')
    }
}