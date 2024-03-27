import jwt from "jsonwebtoken"

export const createJWT = (payload) => {
    const token = jwt.sign(payload, process.env.JWT_SECRET)
    
    return token
}

export const verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET)
}

export const attachCookiesToResponse = ({ res, user, refreshToken }) => {
    const accessTokenJwt = createJWT({ payload: { user }})
    const refreshTokenJwt = createJWT({ payload: { user, refreshToken }})

    const shorterExp = 1000 * 60 * 60 * 24 * 30
    const longerExp = 100 * 60 * 60 * 24 * 30

    res.cookie('refreshToken', refreshTokenJwt, {
        httpOnly: true,
        signed: true,
        secure: false,
        // secure: process.env.NODE_ENV === 'production',
        expires: new Date(Date.now() + longerExp)
    })

    res.cookie('accessToken', accessTokenJwt, {
        httpOnly: true,
        signed: true,
        secure: false,
        // secure: process.env.NODE_ENV === 'production',
        expires: new Date(Date.now() + shorterExp)
    }) 
    return { accessTokenJwt, refreshToken }
}