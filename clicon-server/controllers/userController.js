import User from "../models/User.js"

export const getProfile = async(req, res) => {
    try{
        console.log(req.user)
        const user = await User.findById(req.user.userId).select("-password")  

        res.status(200).send({
            success: true,
            user
        })
    } catch(error){
        res.status(500).send({
            success: false,
            message: "Error in reading profile!",
            error 
        })
        console.log(error)
    }
}

export const updateProfile = async(req, res) => {
    try{
        const { firstName, lastName, username, email, address, phone } = req.body
        
    } catch(error){
        res.status(500).send({
            success: false,
            message: "Error in updating profile!",
            error 
        })
        console.log(error)
    }
}