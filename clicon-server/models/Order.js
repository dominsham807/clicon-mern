import mongoose from "mongoose"
import { ObjectId } from "mongodb"
import validator from "validator" 

const orderSchema = new mongoose.Schema({
    orderId: {
        type: String,
        default: (Math.random()+' ').substring(2,10)
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    firstName: { 
        type: String,
        required :[true, 'First Name is required']
    },
    lastName: { 
        type: String,
        required :[true, 'Last Name is required']
    },
    email: {
        type : String,
        required :[true, 'Email is required'],
        validate : {
            validator : validator.isEmail,
            message : 'Please provide valid email'
        }
    },
    phone: {
        type: String,
        required :[true, 'Phone is required'],
    },
    shippingInfo: {
        address: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        }, 
        paymentOption: {
            type: String,
            enum: ["Cash", "Venmo", "Paypal", "Amazon Pay", "Credit Card"]
        },
        cardNum:{
            type: String,
            required :[true, 'Card Number is required'],
        },  
        remarks: {
            type: String
        },
        status: {
            type: String,
            enum: ["Processing", "Packaging", "Shipped", "Completed"],
            default: "Processing"
        }
    }, 
    orderItems: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'OrderItem'
        }
    ],
    quantity: {
        type: Number,
        required: true
    },
    subtotal: {
        type: Number,
        required: true
    }, 
    shippingCharge: {
        type: Number,
        required: true
    }, 
    totalPrice: {
        type: Number,
        required: true
    }, 
    discount: {
        type: Number 
    },  
}, {
    timestamps: true 
})

export default mongoose.model("Order", orderSchema)