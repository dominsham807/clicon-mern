import mongoose from "mongoose"
import bcrypt from "bcryptjs"
import validator from "validator"

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"]
    },
    lastName: {
        type: String,
        required: [true,"Last name is required"], 
    },
    username: {
        type: String,
        unique: [true, 'Username already exists'],
        required: [true, "Username is required"],
        minlength : [6, "Username must be more than 6 letters"]
    },
    email:{
        type : String,
        unique:[true, 'Email already exists'],
        required :[true, 'Email is required field'],
        validate : {
            validator : validator.isEmail,
            message : 'Please provide a valid email'
        }
    },
    address: {
        type : String,
    },
    image: {
        type : String
    },
    password:{
        type: String,
        required: [true, 'Password is provided'],
        minlength: 6
    },
    reviews: [{
        type: mongoose.Types.ObjectId,
        ref: 'Review'
    }],
    role:{
        type: String,
        enum: ['admin', 'user']
    },
    verificationToken: {
        type : String
    },
    isVerified : {
        type: Boolean , 
        default:false
    },
    verified: {
        type: Date
    },
    passwordToken : {
        type : String
    },
    passwordTokenExpirationDate: {
        type : Date
    },
    cartItems : [{
        type : mongoose.Types.ObjectId , 
        ref : 'CartItem'
    }],
    orders : [{
        type : mongoose.Types.ObjectId , 
        ref : 'Order'
    }]
})

userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        return next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    next() 
})

userSchema.methods.comparePassword = async function(password){
    const isMatch = await bcrypt.compare(password, this.password)
    return isMatch 
}

export default mongoose.model("Users", userSchema)