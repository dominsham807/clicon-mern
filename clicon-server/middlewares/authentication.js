import UnauthenticatedError from "../errors/unauthenticated.js"
import Token from "../models/Token.js"
import { attachCookiesToResponse, verifyToken } from "../utils/jwt.js"

export const authenticateUser = async(req, res, next) => {
    const refreshToken = req.signedCookies.refreshToken
    const accessToken = req.signedCookies.accessToken

    console.log(refreshToken)
    console.log(accessToken)
    
    try{
        if(accessToken){
            const { payload } = verifyToken(accessToken)
            req.user = { userId: payload.user._id, name: payload.user.name, role: payload.user.role }
            next()
            return 
        }

        const { payload } = verifyToken(refreshToken)

        const existingToken = await Token.findOne({
            user: payload.user._id,
            refreshToken: payload.refreshToken 
        })

        if(!existingToken || !existingToken.isValid){
            throw new UnauthenticatedError("Invalid authentication")
        }

        attachCookiesToResponse({
            res,
            user: payload.user,
            refreshToken: existingToken.refreshToken 
        })
        
        req.user = { userId: payload.user._id, name: payload.user.name, role: payload.user.role }
        next()
    } catch(error){
        throw new UnauthenticatedError('Invalid authentication')
    }
}