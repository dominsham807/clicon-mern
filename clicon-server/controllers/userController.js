import User from "../models/User.js"

export const getProfile = async(req, res) => {
    try{ 
        console.log(req.user)
        const user = await User.findById(req.user._id).select("-password -verified")  

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
        const { firstName, lastName, username, email, address, phone, country } = req.body
        const photo = req.files[0]

        const user = await User.findById(req.user._id)

        const updatedUser = await User.findByIdAndUpdate(req.user._id, 
            {
                firstName: firstName || user.firstName,
                lastName: lastName || user.lastName,
                username: username || user.username,
                email: email || user.email,
                address: address || user.address,
                phone: phone || user.phone,
                country: country || user.country,
                photo: photo || user.photo
            }, {
                new: true
            }
        )

        res.status(200).send({
            success: true,
            message: "Profile updated successfully",
            updatedUser
        })
    } catch(error){
        res.status(500).send({
            success: false,
            message: "Error in updating profile!",
            error 
        })
        console.log(error)
    }
}