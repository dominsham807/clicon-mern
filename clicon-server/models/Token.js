import mongoose from "mongoose"

const tokenSchema = new mongoose.Schema({
    refreshToken: { type: String, required: true }, 
    isValid : { type: Boolean , default: true },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true 
    }
}, {
    timestamps: true
})

export default mongoose.model("Token", tokenSchema)